import { HttpRequest, HttpResponse } from './../protocols/http';
import { InvalidRequest } from '@/shared/errors';
import Joi from 'joi';
import { badRequest, ok } from '@/shared/helper';

export const validatorParameters =
	(schema: Joi.Schema): any =>
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
