import { injectable, inject } from 'tsyringe';
import { GetOrganization, IGetOrganization } from '@/domain/usecases/organization';
import { IOrganizationRepository } from '@/infra/db/repositories/organization';


@injectable()
export class DbGetOrganization implements IGetOrganization {

	constructor(
		@inject('OrganizationRepository')
		private organizationRepository: IOrganizationRepository,
	) {}

	async get(data: GetOrganization.Params): Promise<GetOrganization.Result> {

		const organizationFound = await this.organizationRepository.findById(data.id);

		return organizationFound;
	}
}
