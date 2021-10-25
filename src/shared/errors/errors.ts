import Joi from 'joi';
import { BadRequest, InternalServerError, NotFound } from './http-status-errors';

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

export class UnableConnectDatabase extends InternalServerError {
	constructor(details: Error) {
		super('Unable to connect to the database.', details);
	}
}

export class CannotStartApplication extends InternalServerError {
	constructor(details: Error) {
		super('Cannot start application.', details);
	}
}
