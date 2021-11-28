import { AuthUser } from "@/domain/models/auth";
import { DonationPackage } from "@/domain/models/donation-package";

export interface IUpdateDonationPackage {
	updateData: (donationPackageData: UpdateDonationPackage.Params) => Promise<UpdateDonationPackage.Result>;
}

export namespace UpdateDonationPackage {
	export type Params = {
		auth_user: AuthUser,
		donation_id: number,
		action: string;
	};

	export type Result = DonationPackage;
}
