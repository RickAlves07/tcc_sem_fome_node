export interface IAddOrganization {
	add: (organizationData: AddOrganization.Params) => Promise<AddOrganization.Result>;
}

export namespace AddOrganization {
	export type Params = {
		name: string;
		cnpj: string;
		email: string;
		phone_number: string;
		owner_id: number;
		address_id: number;
	};

	export type Result = boolean;
}
