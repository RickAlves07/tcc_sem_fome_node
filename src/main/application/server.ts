import express from 'express';
import morgan from 'morgan';
import { CannotStartApplication } from '@/shared/errors';
import { errorHandler } from './errorHandle';
import { BaseController } from '@/presentation/protocols';
import { ExpressControllersAdapter, ExpressMiddlewaresAdapter } from '@/presentation/adapters';
import { emptyString } from '@/shared/utils';
import { ApplicationHeathController, AddressController } from '@/presentation/controllers';

import { PageNotFound } from '@/shared/errors';
export class Server {
	app?: express.Application;
	serverPort?: number;
	serverHost?: string;

	constructor(serverPort: number, serverHost: string) {
		this.serverPort = serverPort;
		this.serverHost = serverHost;
	}

	async start(): Promise<void> {
		if (this.app) {
			return;
		}
		try {
			this.app = await this.startExpressApplication();
		} catch (error) {
			throw new CannotStartApplication(error);
		}
	}

	private async startExpressApplication(): Promise<express.Application>
	{
		/* Express initialization */
		const app = express();

		/* Express utilites */
		app.use(express.json());
		app.use(express.urlencoded({ extended: true }));
		app.use(morgan('tiny'));

		/* API Routes */
		app.use('/api/semfome', await this.createAppControllersRouters());

		app.use('*',(
				req: express.Request,
				res: express.Response,
				next: express.NextFunction,
			) => {
				next(new PageNotFound);
			}
		);

		app.use(errorHandler);
		app.listen(this.serverPort);

		console.log(`Server started. Access in http://${this.serverHost}:${this.serverPort}/api/semfome.`);

		return app;
	}

	private async createAppControllersRouters(): Promise<express.Router>
	{
		const routers = express.Router();
		await this.loadAppControllers().forEach(controller => {
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

				routers[routeConfig.method](fullPath, functions);

			});
		});

		return routers;
	}

	private loadAppControllers(): BaseController[] {
		return [
			new ApplicationHeathController,
			new AddressController,
		];
	}
}
