import StatusCodes from 'http-status-codes';
import { AppException } from './app-exceptions';

const { NOT_FOUND, BAD_REQUEST, NO_CONTENT, UNAUTHORIZED, REQUEST_TIMEOUT, FORBIDDEN } = StatusCodes;

export class NotFound extends AppException {
	constructor(message: string, details?: any)
	{
		super(NOT_FOUND, message, details);
	}
}

export class BadRequest extends AppException {
	constructor(message: string, details?: any)
	{
		super(BAD_REQUEST, message, details);
	}
}

export class NoContent extends AppException {
	constructor(message: string, details?: any)
	{
		super(NO_CONTENT, message, details);
	}
}

export class Unauthorized extends AppException {
	constructor(message: string, details?: any)
	{
		super(UNAUTHORIZED, message, details);
	}
}

export class RequestTimeOut extends AppException {
	constructor(message: string, details?: any)
	{
		super(REQUEST_TIMEOUT, message, details);
	}
}

export class Forbidden extends AppException {
	constructor(message: string, details?: any) {
		super(FORBIDDEN, message, details);
	}
}
