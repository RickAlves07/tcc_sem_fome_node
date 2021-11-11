export interface IDeleteUser {
	delete: (userData: DeleteUser.Params) => Promise<DeleteUser.Result>;
}

export namespace DeleteUser {
	export type Params = {
		email: string,
	};

	export type Result = boolean;
}
