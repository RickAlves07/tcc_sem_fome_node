import { DonationPackage } from '@/domain/models/donation-package';
import { Provision } from '@/domain/models/provision';
import { injectable, inject } from 'tsyringe';
import { AddDonationPackage, IAddDonationPackage } from '@/domain/usecases/donation-package';
import { IDonationPackageRepository, IUserRepository } from '@/infra/db/repositories';
import { User } from '@/domain/models/user';
import { AccountNotFound } from '@/shared/errors';
import { IAddProvision } from '@/domain/usecases';
import { donationPackagesStatus, emptyString } from '@/shared/utils/constants';
import { AuthUser } from '@/domain/models/auth';

@injectable()
export class DbAddDonationPackage implements IAddDonationPackage {

	constructor(
		@inject('DonationPackageRepository')
		private donationPackageRepository: IDonationPackageRepository,

		@inject('UserRepository')
		private userRepository: IUserRepository,

		@inject('AddProvision')
		private addProvision: IAddProvision,
	) {}

	async add(data: AddDonationPackage.Params): Promise<AddDonationPackage.Result> {

		const userData = await this.getUserData(data.auth_user.user_id);

		const savedDonation = await this.saveDonation(data, userData);

		await this.saveProvisions(data.provisions, savedDonation, data.auth_user);

		return true;
	}

	private async getUserData(userId: number) : Promise<User> {
		const user = await this.userRepository.findById(userId);
		if(!userId) {
			throw new AccountNotFound();
		}
		return user;
	}

	private async saveDonation(data: AddDonationPackage.Params, userData: User) : Promise<DonationPackage> {

		const totalItens = await this.countTotalItens(data.provisions);
		const totalWeight = await this.calculateTotalWeight(data.provisions);

		let newDonation: DonationPackage = {
			status: donationPackagesStatus.WaitingATransporter,
			total_items: totalItens,
			total_weight: totalWeight,
			user_donor_id: userData.id,
			address_donor_id: userData.address_id,
			organization_distributor_id: data.organization_distributor_id,
			scheduled_at: data.scheduled_at,
			comments: (data.comments !== emptyString) ? data.comments : null,
		}

		return await this.donationPackageRepository.save(newDonation);
	}

	private async countTotalItens(provisions: Provision[]) : Promise<number> {

		let totalItens: number = 0;
		provisions.forEach(provision => {
			totalItens += provision.quantity;
		});
		return totalItens;
	}

	private async calculateTotalWeight(provisions: Provision[]) : Promise<number> {

		let totalWeight: number = 0;
		provisions.forEach(provision => {
			totalWeight += provision.total_weight;
		});
		return totalWeight;
	}

	private async saveProvisions(provisions: Provision[], savedDonation: DonationPackage, authUser: AuthUser) : Promise<Provision[]> {

		let savedProvisions: Provision[] = [];
		provisions.forEach(async provision => {
			savedProvisions.push(await this.addProvision.add({
				auth_user: authUser,
				...provision,
				donation_package_id: savedDonation.id,
			}))
		});
		return savedProvisions;
	}
}
