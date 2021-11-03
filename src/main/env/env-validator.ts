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


	@IsString()
	appTimezone: string;

	constructor(props: any) {
		this.serverHost = props.serverHost;
		this.serverPort = props.serverPort;
		this.mysqlHost = props.mysqlHost;
		this.mysqlPort= props.mysqlPort;
		this.mysqlDatabase= props.mysqlDatabase;
		this.mysqlUser = props.mysqlUser;
		this.mysqlPassword = props.mysqlPassword;
		this.appTimezone = props.appTimezone;
		Object.assign(this, props);
	}
}
