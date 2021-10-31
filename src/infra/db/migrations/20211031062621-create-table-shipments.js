'use strict';
const shipmentsTable = 'shipments';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable(shipmentsTable, {
			shipment_id: {
				type: Sequelize.BIGINT,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			status: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			total_weight: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			user_transporter_id: {
				type: Sequelize.BIGINT,
				allowNull: true,
				references: { model: 'users', key: 'user_id'},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL'
			},
			user_distributor_id: {
				type: Sequelize.BIGINT,
				allowNull: true,
				references: { model: 'users', key: 'user_id'},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL'
			},
			expiration_date: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			scheduled_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			collected_at: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			delivery_at: {
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
