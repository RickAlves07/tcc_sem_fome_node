import { Sequelize } from 'sequelize';
import { UnableConnectDatabase } from '@/shared/errors';
import { ShipmentModel } from '@/domain/models/shipment';
import { AddressModel } from '@/domain/models/address';
import { DonationPackageModel } from '@/domain/models/donation-package';
import { OrganizationModel } from '@/domain/models/organization';
import { ProvisionModel } from '@/domain/models/provision';
import { UserModel } from '@/domain/models/user';

export class MySqlDB {
	dbConnection?: Sequelize;
	private readonly dialect = 'mysql';
	constructor(
		private dbHost: string,
		private dbPort: number,
		private database: string,
		private dbUser: string,
		private dbPassword: string,
		private appTimezone: string
		) {
	}

	async connect(): Promise<void> {
		if (this.dbConnection) {
			return;
		}
		try {
			this.dbConnection = await this.startDbConnection();
		} catch (error) {
			throw new UnableConnectDatabase(error)
		}
	}

	private async startDbConnection()
	{
		const connection = new Sequelize({
			dialect: this.dialect,
			host: this.dbHost,
			port: this.dbPort,
			database: this.database,
			username: this.dbUser,
			password: this.dbPassword,
			// logging: (...msg) => console.log(msg),
			timezone: this.appTimezone,
		});

		await connection.authenticate();
		await this.initModels(connection);

		console.log('Database connection has been successfully.');

		return connection;
	}

	private async initModels(connection: Sequelize): Promise<void> {
		this.loadDatabaseModels().forEach(async model => {
			await model.start(connection);
			await model.associate(connection.models);
		});
	}

	private loadDatabaseModels() {
		const models = [
			AddressModel,
			DonationPackageModel,
			OrganizationModel,
			ProvisionModel,
			ShipmentModel,
			UserModel,
		];
		return models;
	}
}
