import { injectable, inject } from 'tsyringe';
import { ListShipments, IListShipments } from '@/domain/usecases/shipment';
import { IShipmentRepository } from '@/infra/db/repositories/shipment';

@injectable()
export class DbListShipments implements IListShipments {

	constructor(
		@inject('ShipmentRepository')
		private shipmentRepository: IShipmentRepository,
	) {}

	async list(params: ListShipments.Params): Promise<ListShipments.Result> {

		const shipments = await this.shipmentRepository.findAll(params.pageIndex, params.pageSize);

		return shipments;
	}
}
