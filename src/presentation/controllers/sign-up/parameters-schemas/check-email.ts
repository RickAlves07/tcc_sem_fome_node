import Joi from 'joi';

export const checkEmailSchema = Joi.object({
	payload: Joi.object({
		email: Joi.string().required(),
	}),
});
