import { Request, Response, NextFunction } from 'express';
import { AppException } from '@/shared/errors';

export const errorHandler = (
		err: any,
		req: Request,
		res: Response,
		next: NextFunction
	): void => {
		if (err instanceof AppException) {
			console.warn(err);

			const { statusCode, message, details } = err;
			res.status(statusCode).send({
				message,
				details,
		});
		return next();
	}
	return next();
};
