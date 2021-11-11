import { injectable, inject } from 'tsyringe';
import { UpdateOrganization, IUpdateOrganization } from '@/domain/usecases/organization';
import { IOrganizationRepository } from '@/infra/db/repositories/organization';

@injectable()
export class DbUpdateOrganization implements IUpdateOrganization {

	constructor(
		@inject('OrganizationRepository')
		private organizationRepository: IOrganizationRepository,
	) {}

	async update(data: UpdateOrganization.Params): Promise<UpdateOrganization.Result> {

		const {
			id,
			name,
			cnpj,
			email,
			phone_number,
			owner_id,
			address_id,
		} = data

		const updatedOrganization = await this.organizationRepository.update({
			id,
			name,
			cnpj,
			email,
			phone_number,
			owner_id,
			address_id,
		}, id );

		return updatedOrganization;
	}
}
