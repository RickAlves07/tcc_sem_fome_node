import { Sequelize } from "sequelize";
import { UnableConnectDatabase } from '@/shared/errors';

export class MySqlDB {
	dbConnection?: Sequelize;
	private readonly dialect = 'mysql';
	private host: string;
	private port: number;
	private database: string;
	private user: string;
	private password: string;

	constructor(
		mysqlHost: string,
		mysqlPort: number,
		mysqlDatabase: string,
		mySqlUser: string,
		mySqlPassword: string) {
		this.host = mysqlHost;
		this.port = mysqlPort;
		this.database = mysqlDatabase;
		this.user = mySqlUser;
		this.password = mySqlPassword;
	}

	async connect(): Promise<void> {
		if (this.dbConnection) {
			return;
		}
		const connection = new Sequelize({
			dialect: this.dialect,
			host: this.host,
			port: this.port,
			database: this.database,
			username: this.user,
			password: this.password,
		});
		try {
			await connection.authenticate();
			console.log('Database connection has been successfully.');
			this.dbConnection = connection;
		} catch (error) {
			throw new UnableConnectDatabase(error)
		}
	}
}
