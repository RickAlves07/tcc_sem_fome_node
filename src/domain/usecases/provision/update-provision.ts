import { Provision } from '@/domain/models/provision';
export interface IUpdateProvision {
	update: (provisionData: UpdateProvision.Params) => Promise<UpdateProvision.Result>;
}

export namespace UpdateProvision {
	export type Params = {
		id: number;
		description?: string;
		quantity?: number;
		unit_weight?: number;
		total_weight?: number;
		donation_package_id: number;
		expiration_date?: Date;
	};

	export type Result = Provision;
}
