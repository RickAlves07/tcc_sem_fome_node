import Joi from 'joi';
import { HttpRequest, HttpResponse, Middleware } from '@/presentation/protocols';
import { ValidationError } from '@/shared/errors';
import { badRequest, ok } from '@/shared/helper';

export const ParametersValidator = (schema: Joi.Schema): Middleware =>
	async (req: HttpRequest): Promise<HttpResponse> => {
		const validation = schema.validate(req, {
			abortEarly: false,
			stripUnknown: true,
			allowUnknown: true,
		});

		if (validation.error) {
			return badRequest(new ValidationError(validation.error.details));
		}

		Object.assign(req, validation.value);

		return ok({});
	};
