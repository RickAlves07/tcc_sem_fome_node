export type Address = {
	id?: number;
	zip_code: string,
	street: string,
	address_number: string,
	neighborhood: string,
	city: string,
	state: string,
	complement?: string,
	created_at?: Date;
	updated_at?: Date;
};
