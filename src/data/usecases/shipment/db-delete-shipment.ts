import { injectable, inject } from 'tsyringe';
import { DeleteShipment, IDeleteShipment } from '@/domain/usecases/shipment';
import { IShipmentRepository } from '@/infra/db/repositories/shipment';

@injectable()
export class DbDeleteShipment implements IDeleteShipment {

	constructor(
		@inject('ShipmentRepository')
		private shipmentRepository: IShipmentRepository,
	) {}

	async delete(data: DeleteShipment.Params): Promise<DeleteShipment.Result> {

		await this.shipmentRepository.delete(data);

		return true;
	}
}
