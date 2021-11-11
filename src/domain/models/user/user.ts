export type User = {
	id?: number,
	name: string,
	last_name: string,
	cpf: string,
	email: string,
	phone_number: string,
	password: string,
	address_id: number,
	profile_type: string,
	activated_at?: Date | null,
	created_at?: Date,
	updated_at?: Date,
};
