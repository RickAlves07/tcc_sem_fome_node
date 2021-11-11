export type DonationPackage = {
	id?: number;
	status: string;
	total_items: number;
	total_weight: number;
	comments?: string;
	shipment_id?: number | null;
	user_donor_id: number;
	address_donor_id: number;
	scheduled_at: Date;
	created_at?: Date;
	updated_at?: Date;
};
