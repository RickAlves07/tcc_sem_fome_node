import { HttpResponse, RouteConfig } from '.';

export interface IController<T = any> {
	(request: T): Promise<HttpResponse>;
}

export abstract class BaseController {
	path?: string;

	routeConfigs?: RouteConfig[];
}
