import { IAddressRepository } from '.';
import { MySqlBaseRepository } from '@/shared/infra/db/repositories';
import { Address, AddressModel } from '@/domain/models/address';

export class MySqlAddressRepository extends MySqlBaseRepository<Address>
implements IAddressRepository
{
	constructor() {
		super();
		this.ormRepository = AddressModel;
	}
}
