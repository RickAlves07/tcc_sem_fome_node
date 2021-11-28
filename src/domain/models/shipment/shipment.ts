export type Shipment = {
	id?: number;
	user_transporter_id: number;
	organization_distributor_id: number;
	collected_at?: Date | null;
	delivered_at?: Date | null;
	created_at?: Date;
	updated_at?: Date;
};
