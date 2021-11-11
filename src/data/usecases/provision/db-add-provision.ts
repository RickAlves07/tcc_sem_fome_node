import { injectable, inject } from 'tsyringe';
import { AddProvision, IAddProvision } from '@/domain/usecases/provision';
import { IProvisionRepository } from '@/infra/db/repositories/provision';

@injectable()
export class DbAddProvision implements IAddProvision {

	constructor(
		@inject('ProvisionRepository')
		private provisionRepository: IProvisionRepository,
	) {}

	async add(data: AddProvision.Params): Promise<AddProvision.Result> {

		await this.provisionRepository.save(data);

		return true;
	}
}
