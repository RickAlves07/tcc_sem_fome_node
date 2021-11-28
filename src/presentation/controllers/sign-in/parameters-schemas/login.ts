import Joi from 'joi';

export const loginSchema = Joi.object({
	payload: Joi.object({
		email: Joi.string().required(),
		password: Joi.string().required(),
	}),
});
