import { User } from '@/domain/models/user';

export interface IListUsers {
	list: (paginationData: ListUsers.Params) => Promise<ListUsers.Result>;
}

export namespace ListUsers {
	export type Params = {
		pageIndex: number;
		pageSize: number;
		conditions?: {};
	};

	export type Result = User[];
}
