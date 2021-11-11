import { injectable, inject } from 'tsyringe';
import { AddDonationPackage, IAddDonationPackage } from '@/domain/usecases/donation-package';
import { IDonationPackageRepository } from '@/infra/db/repositories/donation-package';

@injectable()
export class DbAddDonationPackage implements IAddDonationPackage {

	constructor(
		@inject('DonationPackageRepository')
		private donationPackageRepository: IDonationPackageRepository,
	) {}

	async add(data: AddDonationPackage.Params): Promise<AddDonationPackage.Result> {

		await this.donationPackageRepository.save(data);

		return true;
	}
}
