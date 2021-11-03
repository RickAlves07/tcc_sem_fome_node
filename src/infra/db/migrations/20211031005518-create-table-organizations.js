'use strict';
const organizationsTable = 'organizations';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable(organizationsTable, {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			cnpj: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			phone_number: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			owner_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'users', key: 'id'},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			},
			address_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'addresses', key: 'id'},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
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
		await queryInterface.dropTable(organizationsTable)
	}
};
