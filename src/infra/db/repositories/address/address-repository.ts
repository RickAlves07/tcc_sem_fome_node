import { IBaseRepository } from '@/shared/infra/db/repositories';
import { Address } from '@/domain/models/address';

export interface IAddressRepository extends IBaseRepository<Address> {
	findByGeolocation(pageIndex: number, pageSize: number, latitude: number, longitude: number): Promise<Address[] | null>;
}
