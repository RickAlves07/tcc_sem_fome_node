export interface IAddShipment {
	add: (shipmentData: AddShipment.Params) => Promise<AddShipment.Result>;
}

export namespace AddShipment {
	export type Params = {
		status: string;
		total_weight: number;
		user_transporter_id: number;
		user_distributor_id: number;
		expiration_date: Date;
		scheduled_at: Date;
		collected_at: Date | null;
		delivery_at: Date | null;
	};

	export type Result = boolean;
}
