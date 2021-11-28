import Joi from 'joi';

export const listShipmentsSchema = Joi.object({
	query: Joi.object({
		pageIndex: Joi.number().integer().greater(0).required().default(1),
		pageSize: Joi.number().integer().greater(0).required().default(10),
	}),
});
