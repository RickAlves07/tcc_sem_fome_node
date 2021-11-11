'use strict';
const organizationsTable = 'organizations';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(organizationsTable, [{
			id: 1,
			name: 'Organização Doadora',
			cnpj: '00.000.000/0001-00',
			email: 'organizacao.doadora@email.com',
			phone_number: '(21) 98765-4321',
			owner_id: 1,
			address_id: 1,
			created_at: new Date(),
			updated_at: new Date(),
		}, {
			id: 2,
			name: 'Organização Transportadora',
			cnpj: '00.000.000/0002-00',
			email: 'organizacao.transportadora@email.com',
			phone_number: '(21) 98765-4321',
			owner_id: 2,
			address_id: 2,
			created_at: new Date(),
			updated_at: new Date(),
		}, {
			id: 3,
			name: 'Instituição Distribuidora',
			cnpj: '00.000.000/0003-00',
			email: 'organizacao.distribuidora@email.com',
			phone_number: '(21) 98765-4321',
			owner_id: 3,
			address_id: 3,
			created_at: new Date(),
			updated_at: new Date(),
		}, ], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete(organizationsTable, null, {});
	}
};
