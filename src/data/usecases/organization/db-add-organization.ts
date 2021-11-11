import { injectable, inject } from 'tsyringe';
import { AddOrganization, IAddOrganization } from '@/domain/usecases/organization';
import { IOrganizationRepository } from '@/infra/db/repositories/organization';

@injectable()
export class DbAddOrganization implements IAddOrganization {

	constructor(
		@inject('OrganizationRepository')
		private organizationRepository: IOrganizationRepository,
	) {}

	async add(data: AddOrganization.Params): Promise<AddOrganization.Result> {

		await this.organizationRepository.save(data);

		return true;
	}
}
