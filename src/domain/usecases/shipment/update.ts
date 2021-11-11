import { Shipment } from '@/domain/models/shipment';
export interface IUpdateShipment {
	update: (shipmentData: UpdateShipment.Params) => Promise<UpdateShipment.Result>;
}

export namespace UpdateShipment {
	export type Params = {
		id: number;
		status: string;
		total_weight: number;
		user_transporter_id: number;
		user_distributor_id: number;
		expiration_date: Date;
		scheduled_at: Date;
		collected_at?: Date | null;
		delivery_at?: Date | null;
	};

	export type Result = Shipment;
}
