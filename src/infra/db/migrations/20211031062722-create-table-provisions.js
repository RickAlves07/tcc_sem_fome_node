'use strict';
const provisionsTable = 'provisions';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable(provisionsTable, {
			provision_id: {
				type: Sequelize.BIGINT,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			description: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			quantity: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			weight: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			total_weight: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			donation_package_id: {
				type: Sequelize.BIGINT,
				allowNull: false,
				references: { model: 'donations_packages', key: 'donation_package_id'},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			},
			expiration_date: {
				type: Sequelize.DATE,
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
		await queryInterface.dropTable(provisionsTable)
	}
};
