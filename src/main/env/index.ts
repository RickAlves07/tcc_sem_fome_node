import * as dotenv from 'dotenv';
import { EnvValidator } from './env-validator';

dotenv.config();

export const env = new EnvValidator({
	serverPort: (process.env.SERVER_PORT && parseInt(process.env.SERVER_PORT, 10) || 8080),
	serverHost: (process.env.SERVER_HOST || 'localhost'),
	mysqlHost: (process.env.MYSQL_HOST || 'localhost'),
	mysqlPort: (process.env.MYSQL_PORT && parseInt(process.env.MYSQL_PORT, 10) || 3306),
	mysqlDatabase: (process.env.MYSQL_DATABASE || ''),
	mysqlUser: (process.env.MYSQL_USER || ''),
	mysqlPassword: (process.env.MYSQL_PASSWORD || ''),
});
