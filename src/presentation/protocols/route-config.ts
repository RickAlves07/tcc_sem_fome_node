import { Controller } from './base-controller';
import { Middleware } from '../protocols';

export interface RouteConfig {
	method: string;
	path: string;
	func: Controller;
	middlewares: Middleware[];
}
