'use strict';
const organizationsTable = 'organizations';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(organizationsTable, [{
			id: 1,
			name: 'Organização Doadora 1',
			cnpj: '00.000.000/0001-00',
			email: 'organizacao.doadora1@email.com',
			phone_number: '(21) 98765-4321',
			owner_id: 1,
			address_id: 1,
			created_at: new Date(),
			updated_at: new Date(),
		}, {
			id: 2,
			name: 'Organização Transportadora 1',
			cnpj: '00.000.000/0002-00',
			email: 'organizacao.transportadora1@email.com',
			phone_number: '(21) 98765-4321',
			owner_id: 2,
			address_id: 2,
			created_at: new Date(),
			updated_at: new Date(),
		}, {
			id: 3,
			name: 'Instituição Distribuidora 1',
			cnpj: '00.000.000/0003-00',
			email: 'organizacao.distribuidora1@email.com',
			phone_number: '(21) 98765-4321',
			owner_id: 3,
			address_id: 3,
			created_at: new Date(),
			updated_at: new Date(),
		},{
			id: 4,
			name: 'Organização Doadora 2',
			cnpj: '00.000.000/0004-00',
			email: 'organizacao.doadora2@email.com',
			phone_number: '(21) 98765-4321',
			owner_id: 4,
			address_id: 4,
			created_at: new Date(),
			updated_at: new Date(),
		}, {
			id: 5,
			name: 'Organização Transportadora 2',
			cnpj: '00.000.000/0005-00',
			email: 'organizacao.transportadora2@email.com',
			phone_number: '(21) 98765-4321',
			owner_id: 5,
			address_id: 5,
			created_at: new Date(),
			updated_at: new Date(),
		}, {
			id: 6,
			name: 'Instituição Distribuidora 2',
			cnpj: '00.000.000/0006-00',
			email: 'organizacao.distribuidora2@email.com',
			phone_number: '(21) 98765-4321',
			owner_id: 6,
			address_id: 6,
			created_at: new Date(),
			updated_at: new Date(),
		}, ], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete(organizationsTable, null, {});
	}
};
