import { User } from '@/domain/models/user';
export interface IUpdateUser {
	update: (userData: UpdateUser.Params) => Promise<UpdateUser.Result>;
}

export namespace UpdateUser {
	export type Params = {
		id: number;
		name?: string,
		cpf?: string,
		email?: string,
		phone_number?: string,
		password?: string,
		profile_type?: string,
		address_id: number
		activated_at?: Date | null
	};

	export type Result = User;
}
