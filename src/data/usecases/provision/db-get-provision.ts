import { injectable, inject } from 'tsyringe';
import { GetProvision, IGetProvision } from '@/domain/usecases/provision';
import { IProvisionRepository } from '@/infra/db/repositories/provision';


@injectable()
export class DbGetProvision implements IGetProvision {

	constructor(
		@inject('ProvisionRepository')
		private provisionRepository: IProvisionRepository,
	) {}

	async get(data: GetProvision.Params): Promise<GetProvision.Result> {

		const provisionFound = await this.provisionRepository.findById(data.id);

		return provisionFound;
	}
}
