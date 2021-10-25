export abstract class AppException extends Error {
	message: string;
	statusCode: number;
	details?: any;

	constructor(statusCode: number, message: string, details?: any) {
		super(message);

		Object.setPrototypeOf(this, new.target.prototype);

		this.statusCode = statusCode;
		this.message = message;
		this.details = details;

		Error.captureStackTrace(this);
	}
}
