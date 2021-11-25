import { IOrganizationRepository } from '.';
import { MySqlBaseRepository } from '@/shared/infra/db/repositories';
import { Organization, OrganizationModel } from '@/domain/models/organization';

export class MySqlOrganizationRepository extends MySqlBaseRepository<Organization>
implements IOrganizationRepository
{
	constructor() {
		super();
		this.ormRepository = OrganizationModel;
	}

	public async findOrganizationByAddressId(addressId: number): Promise<Organization> {
		return await super.findWithConditions({ where: { address_id: addressId }});
	}
}
