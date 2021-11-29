import { Organization } from '@/domain/models/organization';

export interface IListOrganizations {
	list: (paginationData: ListOrganizations.Params) => Promise<ListOrganizations.Result>;
	listDistributors: () => Promise<Organization[]>;
}

export namespace ListOrganizations {
	export type Params = {
		pageIndex: number;
		pageSize: number;
		conditions?: {};
	};

	export type Result = Organization[];
}
