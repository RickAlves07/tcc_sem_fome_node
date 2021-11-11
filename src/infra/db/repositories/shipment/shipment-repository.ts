import { IBaseRepository } from '@/shared/infra/db/repositories';
import { Shipment } from '@/domain/models/shipment';

export interface IShipmentRepository extends IBaseRepository<Shipment> {

}
