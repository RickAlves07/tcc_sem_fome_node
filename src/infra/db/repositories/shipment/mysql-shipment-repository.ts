import { IShipmentRepository } from '.';
import { MySqlBaseRepository } from '@/shared/infra/db/repositories';
import { Shipment, ShipmentModel } from '@/domain/models/shipment';

export class MySqlShipmentRepository extends MySqlBaseRepository<Shipment>
implements IShipmentRepository
{
	constructor() {
		super();
		this.ormRepository = ShipmentModel;
	}
}
