export interface IDeleteOrganization {
	delete: (organizationData: DeleteOrganization.Params) => Promise<DeleteOrganization.Result>;
}

export namespace DeleteOrganization {
	export type Params = {
		id: number,
	};

	export type Result = boolean;
}
