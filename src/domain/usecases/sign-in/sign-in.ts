import { LoginData } from './../../models/auth/login';
export interface ISignIn {
	login: (userData: SignIn.Params) => Promise<SignIn.Result>;
}

export namespace SignIn {
	export type Params = {
		email: string;
		password: string;
	};

	export type Result = LoginData;
}
