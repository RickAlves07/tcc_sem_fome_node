import Joi from 'joi';

export const loginSchema = Joi.object({
	body: Joi.object({
		email: Joi.string().required(),
		password: Joi.string().required(),
	}),
});
