import { Organization } from '@/domain/models/organization';

export interface IGetOrganization {
	get: (organizationData: GetOrganization.Params) => Promise<GetOrganization.Result>;
	getByAddressId: (organizationData: GetOrganization.Params) => Promise<GetOrganization.Result>;
}

export namespace GetOrganization {
	export type Params = {
		id?: number,
		address_id?: number,
	};

	export type Result = Organization;
}
