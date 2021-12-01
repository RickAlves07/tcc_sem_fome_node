import Joi from 'joi';

export const addDonationSchema = Joi.object({
	body: Joi.object({
		comments: Joi.string().optional().allow(null, ''),
		scheduled_at: Joi.date().required(),
		organization_distributor_id: Joi.number().required(),
		provisions: Joi.array().items( Joi.object({
			description: Joi.string().required(),
			quantity: Joi.number().integer().required(),
			unit_weight: Joi.number().required(),
			total_weight: Joi.number().required(),
			expiration_date: Joi.date().required(),
		})).required(),
	}),
});
