import { DonationPackage } from '@/domain/models/donation-package';

export interface IGetDonationPackage {
	get: (donationPackageData: GetDonationPackage.Params) => Promise<GetDonationPackage.Result>;
}

export namespace GetDonationPackage {
	export type Params = {
		id: number,
	};

	export type Result = DonationPackage;
}
