const dotenv = require('dotenv');
const path = require('path')

dotenv.config();

const env = {
	mysqlHost: (process.env.MYSQL_HOST || 'localhost'),
	mysqlPort: (process.env.MYSQL_PORT && parseInt(process.env.MYSQL_PORT, 10) || 3306),
	mysqlDatabase: (process.env.MYSQL_DATABASE || ''),
	mysqlUser: (process.env.MYSQL_USER || ''),
	mysqlPassword: (process.env.MYSQL_PASSWORD || ''),
	appTimezone: (process.env.APP_TIMEZONE || '')
};

module.exports = {
	dialect: 'mysql',
	host: env.mysqlHost,
	port: env.mysqlPort,
	database: env.mysqlDatabase,
	username: env.mysqlUser,
	password: env.mysqlPassword,
	'migrationStorage': 'json',
	'migrationStoragePath': path.resolve('src', 'infra', 'db/migrations/migrations-history.json'),
	'migrationStorageTableName': 'migrations_history',
	'seederStorage': 'json',
	'seederStoragePath': path.resolve('src', 'infra', 'db', 'seeders', 'seeders-history.json'),
	'seedersStorageTableName': 'seeders_history',
	define: {
		timestamps: true,
		underscored: true,
	},
}

// paths in '.sequelizerc' file:
// 'migrations-path': path.resolve(__dirname, 'src', 'infra', 'db', 'migrations'),
// 'seeders-path': path.resolve(__dirname, 'src', 'infra', 'db', 'seeders'),
// 'models-path': path.resolve(__dirname, 'src', 'domain', 'models'),
