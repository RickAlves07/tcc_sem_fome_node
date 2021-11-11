'use strict';
const donationsPackagesTable = 'donations_packages';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable(donationsPackagesTable, {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			status: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			total_items: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			total_weight: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			comments: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			shipment_id: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: { model: 'shipments', key: 'id'},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL'
			},
			user_donor_id: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: { model: 'users', key: 'id'},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL'
			},
			address_donor_id: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: { model: 'addresses', key: 'id'},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL'
			},
			scheduled_at: {
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
		await queryInterface.dropTable(donationsPackagesTable)
	}
};
