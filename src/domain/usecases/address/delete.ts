export interface IDeleteAddress {
	delete: (addressData: DeleteAddress.Params) => Promise<DeleteAddress.Result>;
}

export namespace DeleteAddress {
	export type Params = {
		id: number,
	};

	export type Result = boolean;
}
