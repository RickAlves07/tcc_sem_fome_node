import { injectable, inject } from 'tsyringe';
import { GetDonationPackage, IGetDonationPackage } from '@/domain/usecases/donation-package';
import { IDonationPackageRepository } from '@/infra/db/repositories/donation-package';


@injectable()
export class DbGetDonationPackage implements IGetDonationPackage {

	constructor(
		@inject('DonationPackageRepository')
		private donationPackageRepository: IDonationPackageRepository,
	) {}

	async get(data: GetDonationPackage.Params): Promise<GetDonationPackage.Result> {

		const donationPackageFound = await this.donationPackageRepository.findById(data.id);

		return donationPackageFound;
	}
}
