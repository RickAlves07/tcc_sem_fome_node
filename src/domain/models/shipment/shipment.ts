export type Shipment = {
	id?: number;
	status: string;
	total_weight: number;
	user_transporter_id: number;
	user_distributor_id: number;
	collected_at: Date | null;
	delivered_at: Date | null;
	created_at?: Date;
	updated_at?: Date;
};
