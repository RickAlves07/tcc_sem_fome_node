import { injectable, inject } from 'tsyringe';
import { UpdateShipment, IUpdateShipment } from '@/domain/usecases/shipment';
import { IShipmentRepository } from '@/infra/db/repositories/shipment';

@injectable()
export class DbUpdateShipment implements IUpdateShipment {

	constructor(
		@inject('ShipmentRepository')
		private shipmentRepository: IShipmentRepository,
	) {}

	async update(data: UpdateShipment.Params): Promise<UpdateShipment.Result> {

		const {
			id,
			user_transporter_id,
			user_distributor_id,
			collected_at,
			delivered_at,
		} = data

		const updatedShipment = await this.shipmentRepository.update({
			user_transporter_id,
			user_distributor_id,
			collected_at,
			delivered_at,
		}, id );

		return updatedShipment;
	}
}
