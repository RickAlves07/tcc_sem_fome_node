import * as dotenv from 'dotenv';
import { EnvValidator } from './env-validator';

dotenv.config();

export const env = new EnvValidator({
	httpPort: (process.env.HTTP_PORT && parseInt(process.env.HTTP_PORT, 10)),
});
