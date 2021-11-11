import { injectable, inject } from 'tsyringe';
import { UpdateDonationPackage, IUpdateDonationPackage } from '@/domain/usecases/donation-package';
import { IDonationPackageRepository } from '@/infra/db/repositories/donation-package';

@injectable()
export class DbUpdateDonationPackage implements IUpdateDonationPackage {

	constructor(
		@inject('DonationPackageRepository')
		private donationPackageRepository: IDonationPackageRepository,
	) {}

	async update(data: UpdateDonationPackage.Params): Promise<UpdateDonationPackage.Result> {

		const {
			id,
			status,
			total_items,
			total_weight,
			comments,
			user_donor_id,
			address_donor_id,
			shipment_id,
			scheduled_at,
			collected_at,
		} = data

		const updatedDonationPackage = await this.donationPackageRepository.update({
			status,
			total_items,
			total_weight,
			comments,
			user_donor_id,
			address_donor_id,
			shipment_id,
			scheduled_at,
			collected_at,
		}, id );

		return updatedDonationPackage;
	}
}
