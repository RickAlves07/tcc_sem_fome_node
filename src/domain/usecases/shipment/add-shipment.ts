import { AuthUser } from '@/domain/models/auth';
import { Shipment } from '@/domain/models/shipment';
export interface IAddShipment {
	add: (shipmentData: AddShipment.Params) => Promise<AddShipment.Result>;
}

export namespace AddShipment {
	export type Params = {
		auth_user: AuthUser,
		organization_distributor_id: number;
	};

	export type Result = Shipment;
}
