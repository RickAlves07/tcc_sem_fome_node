import Joi from 'joi';
import { BadRequest, InternalServerError, NotFound, Unauthorized } from './http-status-errors';

// Not Found
export class RouteNotFound extends NotFound {
	constructor() {
		super('Route not found.');
	}
}

export class AccountNotFound extends NotFound {
	constructor() {
		super('Account not found.');
	}
}

// Bad Request
export class InvalidRequest extends BadRequest {
	constructor(details: Joi.ValidationErrorItem[]) {
		super('Invalid request data.', details);
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

// Unauthorized
export class InvalidUserPassword extends Unauthorized {
	constructor() {
		super('Invalid password.');
	}
}

export class AccountNotActive extends Unauthorized {
	constructor() {
	  super('Account was not active');
	}
}

export class EmailAlreadyRegistered extends Unauthorized {
	constructor() {
		super('This email is already registered in another account');
	}
}
