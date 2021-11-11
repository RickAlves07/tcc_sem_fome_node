export interface IDeleteProvision {
	delete: (provisionData: DeleteProvision.Params) => Promise<DeleteProvision.Result>;
}

export namespace DeleteProvision {
	export type Params = {
		id: number,
	};

	export type Result = boolean;
}
