import { IProvisionRepository } from '.';
import { MySqlBaseRepository } from '@/shared/infra/db/repositories';
import { Provision, ProvisionModel } from '@/domain/models/provision';

export class MySqlProvisionRepository extends MySqlBaseRepository<Provision>
implements IProvisionRepository
{
	constructor() {
		super();
		this.ormRepository = ProvisionModel;
	}
}
