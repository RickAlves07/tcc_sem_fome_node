import Joi, { string } from 'joi';
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
	constructor(details: Error) {
		super('Invalid request', details);
	}
}

export class ValidationError extends BadRequest {
	constructor(details: Joi.ValidationErrorItem[]) {
	  super('Invalid request data', details);
	}
}

export class InvalidAction extends BadRequest {
	constructor(details?: string) {
	  super('Invalid action', details);
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
	constructor(details?: string) {
		super('Invalid password.', details);
	}
}

export class AccountNotActive extends Unauthorized {
	constructor(details?: string) {
	  super('Account was not activated', details);
	}
}

export class NoAuthTokenInHeader extends Unauthorized {
	constructor(details?: string) {
	  super('No auth token in header', details);
	}
}

export class InvalidToken extends Unauthorized {
	constructor(details) {
	  super('Invalid token', details);
	}
}

export class EmailAlreadyRegistered extends Unauthorized {
	constructor(details?: string) {
		super('This email is already registered in another account', details);
	}
}

export class NoPermission extends Unauthorized {
	constructor(details?: string) {
		super('This profile has not permission', details);
	}
}
