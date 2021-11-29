export type Provision = {
	id?: number;
	description: string;
	quantity: number;
	unit_weight: number;
	total_weight: number;
	donation_package_id: number;
	expiration_date: Date;
	created_at?: Date;
	updated_at?: Date;
};
