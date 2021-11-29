import { IBaseRepository } from '@/shared/infra/db/repositories';
import { Organization } from '@/domain/models/organization';

export interface IOrganizationRepository extends IBaseRepository<Organization> {

	findOrganizationByAddressId(addressId: number): Promise<Organization>;

	findDistributorsList() : Promise<Organization[]>;
}
