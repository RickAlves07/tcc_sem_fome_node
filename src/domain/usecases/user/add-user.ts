export interface IAddUser {
	add: (userData: AddUser.Params) => Promise<AddUser.Result>;
}

export namespace AddUser {
	export type Params = {
		name: string,
		last_name: string,
		cpf: string,
		email: string,
		phone_number: string,
		password: string,
		address_id: number,
		profile_type: string,
	};

	export type Result = boolean;
}
