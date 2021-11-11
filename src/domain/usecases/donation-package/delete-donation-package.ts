export interface IDeleteDonationPackage {
	delete: (donationPackageData: DeleteDonationPackage.Params) => Promise<DeleteDonationPackage.Result>;
}

export namespace DeleteDonationPackage {
	export type Params = {
		id: number,
	};

	export type Result = boolean;
}
