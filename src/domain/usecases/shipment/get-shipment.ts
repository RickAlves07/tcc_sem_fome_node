import { Shipment } from '@/domain/models/shipment';

export interface IGetShipment {
	get: (shipmentData: GetShipment.Params) => Promise<GetShipment.Result>;
}

export namespace GetShipment {
	export type Params = {
		id: number,
	};

	export type Result = Shipment;
}
