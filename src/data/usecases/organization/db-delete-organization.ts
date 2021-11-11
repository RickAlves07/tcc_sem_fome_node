import { injectable, inject } from 'tsyringe';
import { DeleteOrganization, IDeleteOrganization } from '@/domain/usecases/organization';
import { IOrganizationRepository } from '@/infra/db/repositories/organization';

@injectable()
export class DbDeleteOrganization implements IDeleteOrganization {

	constructor(
		@inject('OrganizationRepository')
		private organizationRepository: IOrganizationRepository,
	) {}

	async delete(data: DeleteOrganization.Params): Promise<DeleteOrganization.Result> {

		await this.organizationRepository.delete(data);

		return true;
	}
}
