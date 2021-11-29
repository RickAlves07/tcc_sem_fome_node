import { injectable, inject } from 'tsyringe';
import { ListOrganizations, IListOrganizations } from '@/domain/usecases/organization';
import { IOrganizationRepository } from '@/infra/db/repositories/organization';
import { Organization } from '@/domain/models/organization';

@injectable()
export class DbListOrganizations implements IListOrganizations {

	constructor(
		@inject('OrganizationRepository')
		private organizationRepository: IOrganizationRepository,
	) {}

	async list(params: ListOrganizations.Params): Promise<ListOrganizations.Result> {

		const organizations = await this.organizationRepository.findAll(params.pageIndex, params.pageSize);

		return organizations;
	}

	async listDistributors(): Promise<Organization[]> {

		const organizations = await this.organizationRepository.findDistributorsList()

		return organizations;
	}
}
