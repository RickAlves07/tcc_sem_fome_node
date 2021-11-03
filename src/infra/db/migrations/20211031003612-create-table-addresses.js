'use strict';
const addressesTable = 'addresses';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable(addressesTable, {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			zip_code: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			street: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			address_number: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			neighborhood: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			city: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			state: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			complement: {
				type: Sequelize.STRING,
				allowNull: true,
				defaultValue: null,
			},
			latitude: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			longitude: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	down: async (queryInterface) => {
		await queryInterface.dropTable(addressesTable)
	}
};
