import { Address } from '@/domain/models/address';

export interface IListAddresses {
	list: (paginationData: ListAddresses.Params) => Promise<ListAddresses.Result>;
}

export namespace ListAddresses {
	export type Params = {
		pageIndex: number;
		pageSize: number;
		conditions?: {};
	};

	export type Result = Address[];
}
