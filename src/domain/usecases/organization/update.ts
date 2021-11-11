import { Organization } from '@/domain/models/organization';
export interface IUpdateOrganization {
	update: (organizationData: UpdateOrganization.Params) => Promise<UpdateOrganization.Result>;
}

export namespace UpdateOrganization {
	export type Params = {
		id: number;
		name: string;
		cnpj: string;
		email: string;
		phone_number: string;
		owner_id: number;
		address_id: number;
	};

	export type Result = Organization;
}
