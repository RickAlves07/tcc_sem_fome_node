import { Provision } from '@/domain/models/provision';

export interface IGetProvision {
	get: (provisionData: GetProvision.Params) => Promise<GetProvision.Result>;
}

export namespace GetProvision {
	export type Params = {
		id: number,
	};

	export type Result = Provision;
}
