import { Address } from '@/domain/models/address';

export interface IGetAddress {
	get: (addressData: GetAddress.Params) => Promise<GetAddress.Result>;
}

export namespace GetAddress {
	export type Params = {
		id: number,
	};

	export type Result = Address;
}
