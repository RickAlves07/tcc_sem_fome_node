import { validateOrReject, ValidationError } from 'class-validator';
import { Server } from "./server";
import { env } from '../env';
import { EnvError } from '../env/env-error';

export class Application {

	protected Server?: Server;

	async start(): Promise<void> {
		try {
			await validateOrReject(env);

			this.Server = new Server(env.httpPort);

			this.Server.start();

			console.log(`Http server started. Access in Port: ${env.httpPort}`);

		} catch (err: any) {
			if (err.length && err instanceof ValidationError) {
				new EnvError(err);
			}
			throw err;
		}
	}
}
