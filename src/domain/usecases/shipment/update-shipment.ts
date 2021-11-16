import { Shipment } from '@/domain/models/shipment';
export interface IUpdateShipment {
	update: (shipmentData: UpdateShipment.Params) => Promise<UpdateShipment.Result>;
}

export namespace UpdateShipment {
	export type Params = {
		id: number;
		user_transporter_id: number;
		user_distributor_id: number;
		collected_at?: Date | null;
		delivered_at?: Date | null;
	};

	export type Result = Shipment;
}
