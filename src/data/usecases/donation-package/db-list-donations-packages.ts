import { DonationPackage } from '@/domain/models/donation-package';
import { injectable, inject } from 'tsyringe';
import { ListDonationsPackages, IListDonationsPackages } from '@/domain/usecases';
import { IDonationPackageRepository, IUserRepository } from '@/infra/db/repositories';
import { donationsByStatusToReturnByRouteParam, profilesTypes } from '@/shared/utils';
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

		const userData = await this.getUserData(params.auth_user.user_id)

		let conditions: any = {
			status: this.setListOfStatusToGet(params.route),
		}

		if(userData.profile_type === profilesTypes.Transporter) {
			conditions = {
				...conditions,
				address_donor_id: userData.address_id,
			}
		}

		const donationsPackages = await this.getDonations(params, conditions);

		return donationsPackages;
	}

	private async getDonations(params:ListDonationsPackages.Params, conditions: any)
	{
		return await this.donationPackageRepository.findByStatus(
			params.pageIndex,
			params.pageSize,
			conditions,
		);
	}

	private async getUserData(userId: number) : Promise<User> {
		return await this.userRepository.findById(userId);
	}

	private setListOfStatusToGet(route: string) : string[] {
		return donationsByStatusToReturnByRouteParam[route];
	}
}
