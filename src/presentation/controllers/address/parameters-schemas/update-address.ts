import Joi from 'joi';

export const updateAddressSchema = Joi.object({
	params: Joi.object({
		id: Joi.number().integer().required(),
	}),
	body: Joi.object({
		zip_code: Joi.string().optional(),
		street: Joi.string().optional(),
		address_number: Joi.string().optional(),
		neighborhood: Joi.string().optional(),
		city: Joi.string().optional(),
		state: Joi.string().min(2).max(2).optional(),
		complement: Joi.string().optional(),
	}),
});
