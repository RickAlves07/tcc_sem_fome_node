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

		if(!data.collected_at){
			await this.updateCollectedDate(data.collected_at, data.shipment_id)
		}

		if(!data.delivered_at){
			await this.updateCollectedDate(data.delivered_at, data.shipment_id)
		}

		if(!data.delivered_at){
			await this.updateCollectedDate(data.delivered_at, data.shipment_id)
		}

		return await this.shipmentRepository.findById(data.shipment_id);
	}

	private async updateCollectedDate(collectedAt: Date, shipmentId: number) {
		await this.updateShipment({ collected_at: collectedAt}, shipmentId)
	}

	private async updateDeliveredDate(deliveredAt: Date, shipmentId: number) {
		await this.updateShipment({ delivered_at: deliveredAt}, shipmentId)
	}
	private async updateShipment(valuesToUpdate: {}, shipmentId: number) {
		return await this.shipmentRepository.update(valuesToUpdate, shipmentId)
	}
}
