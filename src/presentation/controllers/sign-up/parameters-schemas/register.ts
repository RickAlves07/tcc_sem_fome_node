import { profilesTypes } from './../../../../shared/utils/constants';
import Joi from 'joi';

export const registerSchema = Joi.object({
	body: Joi.object({
		user: Joi.object({
			name: Joi.string().required(),
			cpf: Joi.string().required(),
			email: Joi.string().email().required(),
			phone_number: Joi.string().required(),
			password: Joi.string().min(3).required(),
			profile_type: Joi.string().allow(
				profilesTypes.Donor,
				profilesTypes.Transporter,
				profilesTypes.Distributor
			).required(),
		}).required(),
		address: Joi.object({
			zip_code: Joi.string().required(),
			street: Joi.string().required(),
			address_number: Joi.string().required(),
			neighborhood: Joi.string().required(),
			city: Joi.string().required(),
			state: Joi.string().min(2).max(2).required(),
			complement: Joi.string().required(),
		}).required(),
		organization: Joi.object({
			name: Joi.string().required(),
			cnpj: Joi.string().required(),
			email: Joi.string().email().required(),
			phone_number: Joi.string().required(),
		}).optional(),
		representatives: Joi.array().items( Joi.object({
			name: Joi.string().required(),
			email: Joi.string().email().required(),
			phone_number: Joi.string().required(),
		})).optional(),
	}),
});
