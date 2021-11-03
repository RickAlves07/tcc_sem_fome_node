import { validateOrReject, ValidationError } from 'class-validator';
import { Server } from './server';
import { env } from '../env';
import { EnvError } from '../env/env-error';
import { MySqlDB } from './mysql-db';

export class Application {
	private server?: Server;
	private database?: MySqlDB;

	async start(): Promise<void> {
		try {
			await validateOrReject(env);

			this.database = new MySqlDB(
				env.mysqlHost,
				env.mysqlPort,
				env.mysqlDatabase,
				env.mysqlUser,
				env.mysqlPassword,
				env.appTimezone,
			);

			this.server = new Server(env.serverPort, env.serverHost);

			await this.database.connect();

			await this.server.start();

			console.log('Application started ✔');

		} catch (err: any) {
			if (err.length && err instanceof ValidationError) {
				new EnvError(err);
			}
			throw err;
		}
	}
}
