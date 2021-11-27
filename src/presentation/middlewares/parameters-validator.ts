import Joi from 'joi';
import { HttpRequest, HttpResponse } from '@/presentation/protocols';
import { InvalidRequest } from '@/shared/errors';
import { badRequest, ok } from '@/shared/helper';

export const ParametersValidator = (schema: Joi.Schema): any =>
	async (req: HttpRequest): Promise<HttpResponse> => {
		const validation = schema.validate(req, {
			abortEarly: false,
			stripUnknown: true,
			allowUnknown: true,
		});

		if (validation.error) {
			return badRequest(new InvalidRequest(validation.error.details));
		}

		Object.assign(req, validation.value);

		return ok({});
	};
