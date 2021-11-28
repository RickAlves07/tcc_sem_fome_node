import { AuthUser } from "@/domain/models/auth";

export interface IDeleteShipment {
	delete: (shipmentData: DeleteShipment.Params) => Promise<DeleteShipment.Result>;
}

export namespace DeleteShipment {
	export type Params = {
		auth_user: AuthUser,
		shipment_id: number,
	};

	export type Result = boolean;
}
