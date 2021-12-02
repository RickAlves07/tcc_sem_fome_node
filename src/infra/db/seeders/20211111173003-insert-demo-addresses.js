'use strict';
const addressesTable = 'addresses';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(addressesTable, [{
			id: 1,
			zip_code: '00000-001',
			street: 'Avenida A',
			address_number: '1',
			neighborhood: 'Barra da Tijuca',
			city: 'Rio de Janeiro',
			state: 'RJ',
			complement: 'complemento',
			created_at: new Date(),
			updated_at: new Date(),
		}, {
			id: 2,
			zip_code: '00000-002',
			street: 'Rua B',
			address_number: '2',
			neighborhood: 'Barra da Tijuca',
			city: 'Rio de Janeiro',
			state: 'RJ',
			complement: 'complemento',
			created_at: new Date(),
			updated_at: new Date(),
		},{
			id: 3,
			zip_code: '00000-003',
			street: 'Rua C',
			address_number: '3',
			neighborhood: 'Taquara',
			city: 'Rio de Janeiro',
			state: 'RJ',
			complement: 'complemento',
			created_at: new Date(),
			updated_at: new Date(),
		},{
			id: 4,
			zip_code: '00000-001',
			street: 'Avenida D',
			address_number: '4',
			neighborhood: 'Barra da Tijuca',
			city: 'Rio de Janeiro',
			state: 'RJ',
			complement: 'complemento',
			created_at: new Date(),
			updated_at: new Date(),
		}, {
			id: 5,
			zip_code: '00000-002',
			street: 'Rua Y',
			address_number: '5',
			neighborhood: 'Barra da Tijuca',
			city: 'Rio de Janeiro',
			state: 'RJ',
			complement: 'complemento',
			created_at: new Date(),
			updated_at: new Date(),
		},{
			id: 6,
			zip_code: '00000-003',
			street: 'Rua V',
			address_number: '6',
			neighborhood: 'Taquara',
			city: 'Rio de Janeiro',
			state: 'RJ',
			complement: 'complemento',
			created_at: new Date(),
			updated_at: new Date(),
		}, ], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete(addressesTable, null, {});
	}
};
