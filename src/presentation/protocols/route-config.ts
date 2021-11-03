import { IController, Middleware } from '.';

export interface RouteConfig {
	method: string;
	path: string;
	func: IController;
	middlewares: Middleware[];
}
