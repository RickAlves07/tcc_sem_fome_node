export type Organization = {
	id?: number;
	name: string;
	cnpj: string;
	email: string;
	phone_number: string;
	owner_id: number;
	address_id: number;
	created_at?: Date;
	updated_at?: Date;
};
