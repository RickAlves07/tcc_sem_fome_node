export interface IAddDonationPackage {
	add: (donationPackageData: AddDonationPackage.Params) => Promise<AddDonationPackage.Result>;
}

export namespace AddDonationPackage {
	export type Params = {
		total_items: number;
		total_weight: number;
		comments?: string;
		user_donor_id: number;
		address_donor_id: number;
		scheduled_at: Date;
	};

	export type Result = boolean;
}
