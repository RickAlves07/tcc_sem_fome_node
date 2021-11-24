import { AddUser, AddAddress, AddOrganization } from '@/domain/usecases';
export interface ISignUp {
	new: (userData: SignUp.Params) => Promise<SignUp.Result>;
}

export namespace SignUp {
	export type Params = {
		user: AddUser.Params,
		address: AddAddress.Params,
		organization?: AddOrganization.Params,
		representatives?: AddUser.Params[],
	};

	export type Result = boolean;
}
