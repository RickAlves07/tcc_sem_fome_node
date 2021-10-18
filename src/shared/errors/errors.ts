import Joi from 'joi';
import { BadRequest, NotFound } from './http-status-errors';

export class PageNotFound extends NotFound {
	constructor() {
		super('Page not found.');
	}
}

export class InvalidRequest extends BadRequest {
	constructor(details: Joi.ValidationErrorItem[]) {
		super('Invalid request data.', details);
	}
}
