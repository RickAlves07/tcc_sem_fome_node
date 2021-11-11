import { injectable, inject } from 'tsyringe';
import { DeleteProvision, IDeleteProvision } from '@/domain/usecases/provision';
import { IProvisionRepository } from '@/infra/db/repositories/provision';

@injectable()
export class DbDeleteProvision implements IDeleteProvision {

	constructor(
		@inject('ProvisionRepository')
		private provisionRepository: IProvisionRepository,
	) {}

	async delete(data: DeleteProvision.Params): Promise<DeleteProvision.Result> {

		await this.provisionRepository.delete(data);

		return true;
	}
}
