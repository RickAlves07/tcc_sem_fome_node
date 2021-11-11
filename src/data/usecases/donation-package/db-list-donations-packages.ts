import { injectable, inject } from 'tsyringe';
import { ListDonationsPackages, IListDonationsPackages } from '@/domain/usecases/donation-package';
import { IDonationPackageRepository } from '@/infra/db/repositories/donation-package';

@injectable()
export class DbListDonationsPackages implements IListDonationsPackages {

	constructor(
		@inject('DonationPackageRepository')
		private donationPackageRepository: IDonationPackageRepository,
	) {}

	async list(params: ListDonationsPackages.Params): Promise<ListDonationsPackages.Result> {
		console.log(params)

		const donationsPackages = await this.donationPackageRepository.findAll(params.pageIndex, params.pageSize);

		return donationsPackages;
	}
}
