export interface IAddProvision {
	add: (provisionData: AddProvision.Params) => Promise<AddProvision.Result>;
}

export namespace AddProvision {
	export type Params = {
		description: string;
		quantity: number;
		weight: number;
		total_weight: number;
		donation_package_id: number;
		expiration_date: Date;
	};

	export type Result = boolean;
}
