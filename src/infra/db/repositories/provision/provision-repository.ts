import { IBaseRepository } from '@/shared/infra/db/repositories';
import { Provision } from '@/domain/models/provision';

export interface IProvisionRepository extends IBaseRepository<Provision> {

}
