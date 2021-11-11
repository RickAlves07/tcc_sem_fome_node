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

	public async findByGeolocation(pageIndex: number, pageSize: number, latitude: number, longitude: number): Promise<Address[] | null> {
		const response = await super.findAll(pageIndex, pageSize, { latitude, longitude })

		return response;
	}
}
