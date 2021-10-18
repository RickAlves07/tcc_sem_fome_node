
import express from 'express';
import morgan from 'morgan';
import { errorHandler } from './errorHandle';
import { BaseController } from '@/presentation/protocols';

import { emptyString, RequestMethods } from '@/shared/utils';
import { ApplicationHeathController } from '@/presentation/controllers';
import { ExpressControllersAdapter, ExpressMiddlewaresAdapter } from '@/presentation/adapters';

import { PageNotFound } from '@/shared/errors';
export class Server {
	app?: express.Application;
	serverPort?: number;
	constructor(serverPort: number) {
		this.serverPort = serverPort;
	}

	start(): void {
		if (this.app) {
			return;
		}

		/* Express initialization */
		const app = express();

		/* Express utilites */
		app.use(express.json());
		app.use(express.urlencoded({ extended: true }));
		app.use(morgan('tiny'));

		/* API Routes */
		app.use('/api/name', this.createAppControllersRouters());

		app.use('*',(
				req: express.Request,
				res: express.Response,
				next: express.NextFunction
			) => {
				next(new PageNotFound);
			}
		);

		app.use(errorHandler);
		app.listen(this.serverPort);

		this.app = app;
	}

	private createAppControllersRouters()
	{
		const routers = express.Router();
		this.loadAppControllers().forEach(controller => {
			if (!controller.routeConfigs) {
				return;
			}

			controller.routeConfigs.forEach(routeConfig => {
				const fullPath = [controller.path, routeConfig.path].join(emptyString);

				const functions = [
					...routeConfig.middlewares.map(middleware =>
						ExpressMiddlewaresAdapter(middleware)
					  ),
					ExpressControllersAdapter(routeConfig.func.bind(controller))
				];

				switch (routeConfig.method) {
					case RequestMethods.GET:
						routers.get(fullPath, functions);
						break;
					case RequestMethods.POST:
						routers.post(fullPath, functions);
						break;
					case RequestMethods.PUT:
						routers.put(fullPath, functions);
						break;
					case RequestMethods.PATCH:
						routers.patch(fullPath, functions);
						break;
					case RequestMethods.DELETE:
						routers.delete(fullPath, functions);
						break;
					default:
						break;
				}
			});
		});

		return routers;
	}

	private loadAppControllers(): BaseController[] {
		return [
			new ApplicationHeathController,
		];
	}
}
