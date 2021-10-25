import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class EnvValidator {
	@IsInt()
	@IsNotEmpty()
	serverPort: number;

	@IsString()
	@IsNotEmpty()
	serverHost: string;

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

	constructor(props: any) {
		this.serverPort = props.httpPort;
		this.mysqlHost = props.httpPort;
		this.mysqlPort= props.httpPort;
		this.mysqlDatabase= props.httpPort;
		this.mysqlUser = props.httpPort;
		this.mysqlPassword = props.httpPort;
		Object.assign(this, props);
	}
}
