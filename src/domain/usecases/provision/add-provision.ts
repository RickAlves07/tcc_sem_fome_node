import { AuthUser } from '@/domain/models/auth';
import { Provision } from '@/domain/models/provision';
export interface IAddProvision {
	add: (provisionData: AddProvision.Params) => Promise<AddProvision.Result>;
}

export namespace AddProvision {
	export type Params = {
		auth_user: AuthUser,
		description: string;
		quantity: number;
		weight: number;
		total_weight: number;
		donation_package_id: number;
		expiration_date: Date;
	};

	export type Result = Provision;
}
