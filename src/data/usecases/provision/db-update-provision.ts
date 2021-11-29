import { injectable, inject } from 'tsyringe';
import { UpdateProvision, IUpdateProvision } from '@/domain/usecases/provision';
import { IProvisionRepository } from '@/infra/db/repositories/provision';

@injectable()
export class DbUpdateProvision implements IUpdateProvision {

	constructor(
		@inject('ProvisionRepository')
		private provisionRepository: IProvisionRepository,
	) {}

	async update(data: UpdateProvision.Params): Promise<UpdateProvision.Result> {

		const {
			id,
			description,
			quantity,
			unit_weight,
			total_weight,
			donation_package_id,
			expiration_date,
		} = data

		const updatedProvision = await this.provisionRepository.update({
			description,
			quantity,
			unit_weight,
			total_weight,
			donation_package_id,
			expiration_date,
		}, id );

		return updatedProvision;
	}
}
