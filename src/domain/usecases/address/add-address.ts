import { Address } from './../../models/address';
export interface IAddAddress {
	add: (addressData: AddAddress.Params) => Promise<AddAddress.Result>;
}

export namespace AddAddress {
	export type Params = {
		zip_code: string,
		street: string,
		address_number: string,
		neighborhood: string,
		city: string,
		state: string,
		complement?: string,
	};

	export type Result = Address;
}
