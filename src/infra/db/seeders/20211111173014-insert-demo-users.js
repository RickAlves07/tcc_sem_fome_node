'use strict';
const usersTable = 'users';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(usersTable, [{
			id: 1,
			name: 'Usuario',
			last_name: 'Doador',
			cpf: '000.000.000-01',
			email: 'doador@email.com',
			phone_number: '(21) 98765-4321',
			password: '123',
			address_id: 1,
			profile_type: 'donor',
			activated_at: new Date(),
			created_at: new Date(),
			updated_at: new Date(),
		}, {
			id: 2,
			name: 'Usuario',
			last_name: 'Transportador',
			cpf: '000.000.000-02',
			email: 'transportador@email.com',
			phone_number: '(21) 98765-4321',
			password: '123',
			address_id: 2,
			profile_type: 'transporter',
			activated_at: new Date(),
			created_at: new Date(),
			updated_at: new Date(),
		}, {
			id: 3,
			name: 'Usuario',
			last_name: 'Distribuidor',
			cpf: '000.000.000-03',
			email: 'distribuidor@email.com',
			phone_number: '(21) 98765-4321',
			password: '123',
			address_id: 3,
			profile_type: 'distributor',
			activated_at: new Date(),
			created_at: new Date(),
			updated_at: new Date(),
		},], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete(usersTable, null, {});
	}
};
