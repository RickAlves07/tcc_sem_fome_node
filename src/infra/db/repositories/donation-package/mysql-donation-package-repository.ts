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
}
