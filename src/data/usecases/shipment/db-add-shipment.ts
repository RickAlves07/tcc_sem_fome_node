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

		const shipmentToSave = {
			user_transporter_id: data.auth_user.user_id,
			organization_distributor_id: data.organization_distributor_id,
		}

		return this.shipmentRepository.save(shipmentToSave);
	}
}
