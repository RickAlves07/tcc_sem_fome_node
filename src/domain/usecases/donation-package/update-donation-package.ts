import { DonationPackage } from "@/domain/models/donation-package";

export interface IUpdateDonationPackage {
	update: (donationPackageData: UpdateDonationPackage.Params) => Promise<UpdateDonationPackage.Result>;
}

export namespace UpdateDonationPackage {
	export type Params = {
		id: number;
		status?: string;
		total_items?: number;
		total_weight?: number;
		comments?: string;
		user_donor_id: number;
		address_donor_id: number;
		shipment_id?: number | null;
		scheduled_at: Date;
	};

	export type Result = DonationPackage;
}
