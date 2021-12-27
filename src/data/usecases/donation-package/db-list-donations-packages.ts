import { injectable, inject } from 'tsyringe';
import { ListDonationsPackages, IListDonationsPackages } from '@/domain/usecases';
import { IDonationPackageRepository, IOrganizationRepository, IUserRepository } from '@/infra/db/repositories';
import { donationsByStatusToReturnByRouteParam, profilesTypes, statusToReturnByRouteParamList } from '@/shared/utils';
import { User } from '@/domain/models/user';
import { Organization } from '@/domain/models/organization';
import Utilities from '@/shared/utils/utilities';

@injectable()
export class DbListDonationsPackages implements IListDonationsPackages {

	constructor(
		@inject('DonationPackageRepository')
		private donationPackageRepository: IDonationPackageRepository,

		@inject('UserRepository')
		private userRepository: IUserRepository,

		@inject('OrganizationRepository')
		private organizationRepository: IOrganizationRepository,
	) {}

	async list(params: ListDonationsPackages.Params): Promise<ListDonationsPackages.Result> {

		const userData = await this.getUserData(params.auth_user.user_id);
		const userOrganization = await this.getUserOrganizationByAddressId(userData.address_id);

		let conditions: any = {
			status: this.setListOfStatusToGetByProfile(params.route),
		}
		let conditionsTransporter: any;

		conditions = this.getConditionsByParameterRoute(params.route, conditions, userData, userOrganization);

		conditionsTransporter = this.getConditionsTransporterByParameterRoute(params.route, conditionsTransporter, userData);

		const donationsPackages = await this.getDonationsList(params, conditions, conditionsTransporter);

		return donationsPackages;
	}

	private async getUserData(userId: number) : Promise<User> {
		return await this.userRepository.findById(userId);
	}

	private async getUserOrganizationByAddressId(addressId: number) : Promise<Organization>
	{
		return await await this.organizationRepository.findOrganizationByAddressId(addressId);
	}

	private async getDonationsList(params:ListDonationsPackages.Params, conditions: any, conditionsTransporter?: any)
	{
		return await this.donationPackageRepository.findByStatus(
			params.pageIndex,
			params.pageSize,
			conditions,
			conditionsTransporter,
		);
	}

	private setListOfStatusToGetByProfile(route: string) : string[] {
		return donationsByStatusToReturnByRouteParam[route];
	}

	private getConditionsByParameterRoute(route: string, conditions: any, userData: User, organizationData?: Organization) {
		switch(route){
			// Donor
			case statusToReturnByRouteParamList.History:
			case statusToReturnByRouteParamList.InProgress:
			case statusToReturnByRouteParamList.OnTheWay:
				conditions = {
					...conditions,
					user_donor_id: userData.id,
				}
				break;
			// Distributor
			case statusToReturnByRouteParamList.Received:
				conditions = {
					...conditions,
					organization_distributor_id: organizationData.id,
				}
				break;
			default:
				break;
		}
		return conditions;
	}

	private getConditionsTransporterByParameterRoute(route: string, conditionsTransporter: any, userData: User) {
		if(userData.profile_type === profilesTypes.Transporter){
			switch(route){
				//Transporter
				case statusToReturnByRouteParamList.ShipmentsHistory:
				case statusToReturnByRouteParamList.ShipmentsInProgress:
					conditionsTransporter = {
						...conditionsTransporter,
						user_transporter_id: userData.id,
					}
				default:
					break;
			}
		}
		return conditionsTransporter;
	}
}
