'use strict';
const shipmentsTable = 'shipments';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable(shipmentsTable, {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			user_transporter_id: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: { model: 'users', key: 'id'},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL'
			},
			organization_distributor_id: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: { model: 'users', key: 'id'},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL'
			},
			collected_at: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			delivered_at: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			received_at: {
				type: Sequelize.DATE,
				allowNull: true,
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
		await queryInterface.dropTable(shipmentsTable)
	}
};
