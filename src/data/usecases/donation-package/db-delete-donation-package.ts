import { injectable, inject } from 'tsyringe';
import { DeleteDonationPackage, IDeleteDonationPackage } from '@/domain/usecases/donation-package';
import { IDonationPackageRepository } from '@/infra/db/repositories/donation-package';

@injectable()
export class DbDeleteDonationPackage implements IDeleteDonationPackage {

	constructor(
		@inject('DonationPackageRepository')
		private donationPackageRepository: IDonationPackageRepository,
	) {}

	async delete(data: DeleteDonationPackage.Params): Promise<DeleteDonationPackage.Result> {

		await this.donationPackageRepository.delete(data);

		return true;
	}
}
