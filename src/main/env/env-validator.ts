import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class EnvValidator {
	@IsString()
	@IsNotEmpty()
	serverHost: string;

	@IsInt()
	@IsNotEmpty()
	serverPort: number;

	@IsString()
	@IsNotEmpty()
	mysqlHost: string;

	@IsInt()
	@IsNotEmpty()
	mysqlPort: number;

	@IsString()
	@IsNotEmpty()
	mysqlDatabase: string;

	@IsString()
	@IsNotEmpty()
	mysqlUser: string;

	@IsString()
	@IsNotEmpty()
	mysqlPassword: string;


	@IsString()
	@IsNotEmpty()
	appTimezone: string;

	@IsString()
	@IsNotEmpty()
	jwtSecret: string;

	@IsInt()
	@IsNotEmpty()
	hashSalt: number;

	constructor(props: envProps) {
		Object.assign(this, props);
	}
}

type envProps = {
	serverHost: string;
	serverPort: number;
	mysqlHost: string;
	mysqlPort: number;
	mysqlDatabase: string;
	mysqlUser: string;
	mysqlPassword: string;
	appTimezone: string;
	jwtSecret: string;
	hashSalt: number;
}
