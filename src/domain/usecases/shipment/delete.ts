export interface IDeleteShipment {
	delete: (shipmentData: DeleteShipment.Params) => Promise<DeleteShipment.Result>;
}

export namespace DeleteShipment {
	export type Params = {
		id: number,
	};

	export type Result = boolean;
}
