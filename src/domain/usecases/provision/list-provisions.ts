import { Provision } from '@/domain/models/provision';

export interface IListProvisions {
	list: (paginationData: ListProvisions.Params) => Promise<ListProvisions.Result>;
}

export namespace ListProvisions {
	export type Params = {
		pageIndex: number;
		pageSize: number;
		conditions?: {};
	};

	export type Result = Provision[];
}
