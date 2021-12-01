import { AuthUser } from '@/domain/models/auth';
import { Shipment } from '@/domain/models/shipment';
export interface IUpdateShipment {
	update: (shipmentData: UpdateShipment.Params) => Promise<UpdateShipment.Result>;
}

export namespace UpdateShipment {
	export type Params = {
		auth_user: AuthUser
		shipment_id: number;
		collected_at?: Date | null;
		delivered_at?: Date | null;
		received_at?: Date | null;
	};

	export type Result = Shipment;
}
