import { Address } from '@/domain/models/address';
export interface IUpdateAddress {
	update: (addressData: UpdateAddress.Params) => Promise<UpdateAddress.Result>;
}

export namespace UpdateAddress {
	export type Params = {
		id: number,
		zip_code?: string,
		street?: string,
		address_number?: string,
		neighborhood?: string,
		city?: string,
		state?: string,
		complement?: string,
		latitude?: number,
		longitude?: number,
	};

	export type Result = Address;
}
