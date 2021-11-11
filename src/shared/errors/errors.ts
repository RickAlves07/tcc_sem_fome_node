import Joi from 'joi';
import { BadRequest, InternalServerError, NotFound, Unauthorized } from './http-status-errors';

// Not Found
export class PageNotFound extends NotFound {
	constructor() {
		super('Page not found.');
	}
}


// Bad Request
export class InvalidRequest extends BadRequest {
	constructor(details: Joi.ValidationErrorItem[]) {
		super('Invalid request data.', details);
	}
}

export class EmailAlreadyRegistered extends BadRequest {
	constructor() {
		super('This email is already registered in another account');
	}
}

// Internal Server Error
export class UnableConnectDatabase extends InternalServerError {
	constructor(details: Error) {
		super('Unable to connect to the database.', details);
	}
}

export class InternalDatabaseError extends InternalServerError {
	constructor(details: Error) {
		super('Internal database error.', details);
	}
}

export class CannotStartApplication extends InternalServerError {
	constructor(details: Error) {
		super('Cannot start application.', details);
	}
}
