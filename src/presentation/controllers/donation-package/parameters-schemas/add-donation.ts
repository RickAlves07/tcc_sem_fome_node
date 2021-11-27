import Joi from 'joi';

export const addDonationSchema = Joi.object({
	body: Joi.object({
		comments: Joi.string().optional(),
		scheduled_at: Joi.date().required(),
		provisions: Joi.object([{
			description: Joi.string().required(),
			quantity: Joi.number().integer().required(),
			weight: Joi.number().required(),
			total_weight: Joi.number().required(),
			expiration_date: Joi.date().required(),
		}])
	}),
});
