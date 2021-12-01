import { IBaseRepository } from '@/shared/infra/db/repositories';
import { DonationPackage } from '@/domain/models/donation-package';

export interface IDonationPackageRepository extends IBaseRepository<DonationPackage> {
	findByUserDonorId(pageIndex: number, pageSize: number, userDonorId: number): Promise<DonationPackage[] | null>;

	findByStatus(pageIndex: number, pageSize: number, conditions?: {}, conditionsTransporter?: {}) : Promise<DonationPackage[] | null>;
}
