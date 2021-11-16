import { IBaseRepository } from '@/shared/infra/db/repositories';
import { Address } from '@/domain/models/address';

export interface IAddressRepository extends IBaseRepository<Address> {
}
