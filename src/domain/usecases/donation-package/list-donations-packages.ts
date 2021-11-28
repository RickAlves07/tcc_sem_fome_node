import { AuthUser } from '@/domain/models/auth';
import { DonationPackage } from '@/domain/models/donation-package';

export interface IListDonationsPackages {
	list: (paginationData: ListDonationsPackages.Params) => Promise<ListDonationsPackages.Result>;
}

export namespace ListDonationsPackages {
	export type Params = {
		auth_user: AuthUser,
		pageIndex: number;
		pageSize: number;
		route: string;
		conditions?: {};
	};

	export type Result = DonationPackage[];
}
