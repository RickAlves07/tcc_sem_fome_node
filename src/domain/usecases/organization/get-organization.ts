import { Organization } from '@/domain/models/organization';

export interface IGetOrganization {
	get: (organizationData: GetOrganization.Params) => Promise<GetOrganization.Result>;
}

export namespace GetOrganization {
	export type Params = {
		id: number,
	};

	export type Result = Organization;
}
