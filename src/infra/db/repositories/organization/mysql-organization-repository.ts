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
}
