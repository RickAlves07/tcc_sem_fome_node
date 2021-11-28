export interface ISignIn {
	login: (userData: SignIn.Params) => Promise<SignIn.Result>;
}

export namespace SignIn {
	export type Params = {
		email: string;
		password: string;
	};

	export type Result = {
		userName: string,
		profileType: string,
		organizationName?: string,
		token: string
	};
}
