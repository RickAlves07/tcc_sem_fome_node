'use strict';
const usersTable = 'users';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable(usersTable, {
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
			last_name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			cpf: {
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
			password: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			address_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'addresses', key: 'id'},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			},
			profile_type: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			activated_at: {
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
			}
		});
	},

	down: async (queryInterface) => {
		await queryInterface.dropTable(usersTable);
	}
};
