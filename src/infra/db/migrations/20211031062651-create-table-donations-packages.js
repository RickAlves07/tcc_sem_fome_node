'use strict';
const donationsPackagesTable = 'donations_packages';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable(donationsPackagesTable, {
			donation_package_id: {
				type: Sequelize.BIGINT,
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
			address_id: {
				type: Sequelize.BIGINT,
				allowNull: true,
				references: { model: 'addresses', key: 'address_id'},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL'
			},
			shipment_id: {
				type: Sequelize.BIGINT,
				allowNull: true,
				references: { model: 'shipments', key: 'shipment_id'},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL'
			},
			user_donor_id: {
				type: Sequelize.BIGINT,
				allowNull: true,
				references: { model: 'users', key: 'user_id'},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL'
			},
			comments: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			scheduled_at: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			collected_at: {
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
