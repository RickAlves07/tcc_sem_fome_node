import Joi from 'joi';

export const updateDonationScheme = Joi.object({
	body: Joi.object({
		donation_id: Joi.number().required(),
		action: Joi.string().required(),
	}),
});
