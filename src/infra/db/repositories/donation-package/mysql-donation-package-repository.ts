import { IDonationPackageRepository } from '.';
import { MySqlBaseRepository } from '@/shared/infra/db/repositories';
import { DonationPackage, DonationPackageModel } from '@/domain/models/donation-package';

export class MySqlDonationPackageRepository extends MySqlBaseRepository<DonationPackage>
implements IDonationPackageRepository
{
	constructor() {
		super();
		this.ormRepository = DonationPackageModel;
	}

	public async findByUserDonorId(pageIndex: number, pageSize: number, userDonorId: number): Promise<DonationPackage[] | null> {
		const response = await super.findAll(pageIndex, pageSize, { userDonorId })

		return response;
	}

	public async findByStatus(pageIndex: number, pageSize: number, conditions?: {}) : Promise<DonationPackage[] | null> {
		const response = await super.findAll(
			pageIndex,
			pageSize,
			{ where: conditions },
			{ include: [
				{ association: 'donation_address' },
				{ association: 'donation_user', attributes: {exclude: ['password']}},
				{ association: 'donation_organization' },
				{ association: 'donation_provisions' },
				{ association: 'donation_shipment' },
			]},
		);

		return response;
	}
}
