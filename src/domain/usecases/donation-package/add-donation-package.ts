import { AuthUser } from '@/domain/models/auth';
import { Provision } from '@/domain/models/provision';
export interface IAddDonationPackage {
	add: (donationPackageData: AddDonationPackage.Params) => Promise<AddDonationPackage.Result>;
}

export namespace AddDonationPackage {
	export type Params = {
		auth_user: AuthUser,
		comments?: string,
		scheduled_at: Date,
		organization_distributor_id: number,
		provisions: Provision[],
	};

	export type Result = boolean;
}
