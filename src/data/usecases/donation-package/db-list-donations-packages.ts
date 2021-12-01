import { Unauthorized } from './../../../shared/errors/http-status-errors';
import { AuthUser } from '@/domain/models/auth';
import { DonationPackage } from '@/domain/models/donation-package';
import { injectable, inject } from 'tsyringe';
import { ListDonationsPackages, IListDonationsPackages } from '@/domain/usecases';
import { IDonationPackageRepository, IUserRepository } from '@/infra/db/repositories';
import { donationsByStatusToReturnByRouteParam, profilesTypes, statusToReturnByRouteParamList } from '@/shared/utils';
import { User } from '@/domain/models/user';

@injectable()
export class DbListDonationsPackages implements IListDonationsPackages {

	constructor(
		@inject('DonationPackageRepository')
		private donationPackageRepository: IDonationPackageRepository,

		@inject('UserRepository')
		private userRepository: IUserRepository,
	) {}

	async list(params: ListDonationsPackages.Params): Promise<ListDonationsPackages.Result> {

		let conditions: any = this.getConditionsByProfile(params);

		let conditionsTransporter: any = {}

		if(params.route === statusToReturnByRouteParamList.ShipmentInProgress){
			conditionsTransporter = {
				user_transporter_id: params.auth_user.user_id,
			}
		}

		const donationsPackages = await this.getDonations(params, conditions, conditionsTransporter);

		return donationsPackages;
	}

	private async getDonations(params:ListDonationsPackages.Params, conditions: any, conditionsTransporter?: any)
	{
		return await this.donationPackageRepository.findByStatus(
			params.pageIndex,
			params.pageSize,
			conditions,
			conditionsTransporter,
		);
	}

	private async getUserData(userId: number) : Promise<User> {
		return await this.userRepository.findById(userId);
	}

	private setListOfStatusToGetByProfile(route: string) : string[] {
		return donationsByStatusToReturnByRouteParam[route];

	}

	private getConditionsByProfile(params: ListDonationsPackages.Params){
		let conditions: any = {
			status: this.setListOfStatusToGetByProfile(params.route),
		}

		switch(params.route){
			case statusToReturnByRouteParamList.History || statusToReturnByRouteParamList.InProgress:
				conditions = {
					...conditions,
					user_donor_id: params.auth_user.user_id,
				}
				break;
			case statusToReturnByRouteParamList.onTheWay || statusToReturnByRouteParamList.Received:
				conditions = {
					...conditions,
					organization_distributor_id: params.auth_user.user_id,
				}
				break;
			default:
		}
		return conditions;
	}
}
