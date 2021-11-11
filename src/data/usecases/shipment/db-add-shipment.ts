import { injectable, inject } from 'tsyringe';
import { AddShipment, IAddShipment } from '@/domain/usecases/shipment';
import { IShipmentRepository } from '@/infra/db/repositories/shipment';

@injectable()
export class DbAddShipment implements IAddShipment {

	constructor(
		@inject('ShipmentRepository')
		private shipmentRepository: IShipmentRepository,
	) {}

	async add(data: AddShipment.Params): Promise<AddShipment.Result> {

		await this.shipmentRepository.save(data);

		return true;
	}
}
