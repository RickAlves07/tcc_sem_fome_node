import { injectable, inject } from 'tsyringe';
import { ListProvisions, IListProvisions } from '@/domain/usecases/provision';
import { IProvisionRepository } from '@/infra/db/repositories/provision';

@injectable()
export class DbListProvisions implements IListProvisions {

	constructor(
		@inject('ProvisionRepository')
		private provisionRepository: IProvisionRepository,
	) {}

	async list(params: ListProvisions.Params): Promise<ListProvisions.Result> {

		const provisions = await this.provisionRepository.findAll(params.pageIndex, params.pageSize);

		return provisions;
	}
}
