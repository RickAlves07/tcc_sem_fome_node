import Joi from 'joi';

export const listDonationsSchema = Joi.object({
	query: Joi.object({
		pageIndex: Joi.number().integer().greater(0).required().default(1),
		pageSize: Joi.number().integer().greater(0).required().default(10),
		route: Joi.string().required(),
		conditions: Joi.object({}).optional(),
	}),
});
