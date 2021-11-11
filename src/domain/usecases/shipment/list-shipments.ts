import { Shipment } from '@/domain/models/shipment';

export interface IListShipments {
	list: (paginationData: ListShipments.Params) => Promise<ListShipments.Result>;
}

export namespace ListShipments {
	export type Params = {
		pageIndex: number;
		pageSize: number;
		conditions?: {};
	};

	export type Result = Shipment[];
}
