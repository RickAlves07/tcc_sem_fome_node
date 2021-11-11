import { User } from '@/domain/models/user';

export interface IGetUser {
	get: (userData: GetUser.Params) => Promise<GetUser.Result>;
}

export namespace GetUser {
	export type Params = {
		email: string,
	};

	export type Result = User;
}
