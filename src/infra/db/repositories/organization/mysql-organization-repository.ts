import { profilesTypes } from '@/shared/utils';
import { IOrganizationRepository } from '.';
import { MySqlBaseRepository } from '@/shared/infra/db/repositories';
import { Organization, OrganizationModel } from '@/domain/models/organization';
import { InternalDatabaseError } from '@/shared/errors';

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

	public async findDistributorsList(): Promise<Organization[]> {

		try {
			const response = await this.ormRepository.findAll(
				{ include: [{
					association: 'organization_owner_user',
					where: { profile_type: profilesTypes.Distributor } ,
					attributes: {exclude: ['password']}},
				]})

			return response;
		} catch (error) {
			throw new InternalDatabaseError(error)
		}
	}
}
