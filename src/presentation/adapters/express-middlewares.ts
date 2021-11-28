import { Request, Response, NextFunction } from 'express';
import { HttpRequest, Middleware } from '../protocols';

export const ExpressMiddlewaresAdapter = (middleware: Middleware) => {
	return async (
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> => {
		const httpRequest: HttpRequest = {
			body: req.body,
			headers: req.headers,
			params: req.params,
			query: req.query,
		};
		const httpResponse = await middleware(httpRequest);
		if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
			req.body = { ...req.body, ...httpResponse.body }
			next();
		} else {
			res.status(httpResponse.statusCode).json({
				code: httpResponse.body.code,
				message: httpResponse.body.message,
				details: httpResponse.body.details,
			});
		}
	};
};
