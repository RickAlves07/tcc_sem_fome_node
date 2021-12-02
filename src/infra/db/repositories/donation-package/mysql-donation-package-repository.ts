import { IDonationPackageRepository } from '.';
import { MySqlBaseRepository } from '@/shared/infra/db/repositories';
import { DonationPackage, DonationPackageModel } from '@/domain/models/donation-package';
import { where } from 'sequelize/types';

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

	public async findByStatus(pageIndex: number, pageSize: number, conditions?: any, conditionsTransporter?: any) : Promise<DonationPackage[] | null> {
		const response = await super.findAll(
			pageIndex,
			pageSize,
			{ where: conditions, order: [['created_at', 'ASC']] },
			{ include: [
				{ association: 'donation_address' },
				{
					association: 'donation_user',
					attributes: { exclude: ['password']},
					include: [{ association: 'user_organization',
					include: [{ association: 'organization_owner_user' }] }]
				},
				{ association: 'donation_organization', include: [{ association: 'organization_owner_user' }] },
				{ association: 'donation_provisions' },
				{
					association: 'donation_shipment',
					where: conditionsTransporter, include: [{ association: 'shipment_transporter_user', include: [{ association: 'user_organization', include: [{ association: 'organization_owner_user' }] }] }]
				},
			]},
		);

		return response;
	}
}
