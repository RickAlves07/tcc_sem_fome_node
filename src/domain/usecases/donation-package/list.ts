import { DonationPackage } from '@/domain/models/donation-package';

export interface IListDonationsPackages {
	list: (paginationData: ListDonationsPackages.Params) => Promise<ListDonationsPackages.Result>;
}

export namespace ListDonationsPackages {
	export type Params = {
		pageIndex: number;
		pageSize: number;
		conditions?: {};
	};

	export type Result = DonationPackage[];
}
