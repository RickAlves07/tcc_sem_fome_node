export type Shipment = {
	id?: number;
	status: string;
	total_weight: number;
	user_transporter_id: number;
	user_distributor_id: number;
	expiration_date: Date;
	scheduled_at: Date;
	collected_at: Date | null;
	delivery_at: Date | null;
	created_at?: Date;
	updated_at?: Date;
};
