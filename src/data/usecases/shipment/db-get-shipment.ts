import { injectable, inject } from 'tsyringe';
import { GetShipment, IGetShipment } from '@/domain/usecases/shipment';
import { IShipmentRepository } from '@/infra/db/repositories/shipment';


@injectable()
export class DbGetShipment implements IGetShipment {

	constructor(
		@inject('ShipmentRepository')
		private shipmentRepository: IShipmentRepository,
	) {}

	async get(data: GetShipment.Params): Promise<GetShipment.Result> {

		const shipmentFound = await this.shipmentRepository.findById(data.id);

		return shipmentFound;
	}
}
