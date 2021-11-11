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
			status,
			total_weight,
			user_transporter_id,
			user_distributor_id,
			expiration_date,
			scheduled_at,
			collected_at,
			delivery_at,
		} = data

		const updatedShipment = await this.shipmentRepository.update({
			status,
			total_weight,
			user_transporter_id,
			user_distributor_id,
			expiration_date,
			scheduled_at,
			collected_at,
			delivery_at,
		}, id );

		return updatedShipment;
	}
}
