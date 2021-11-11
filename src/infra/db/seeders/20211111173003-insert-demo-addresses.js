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
			latitude: -23.004993,
			longitude: -43.319531,
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
			latitude: -23.000181,
			longitude: -43.349101,
			created_at: new Date(),
			updated_at: new Date(),
		},{
			id: 3,
			zip_code: '00000-003',
			street: 'Rua B',
			address_number: '3',
			neighborhood: 'Taquara',
			city: 'Rio de Janeiro',
			state: 'RJ',
			complement: 'complemento',
			latitude: -22.923275,
			longitude: -43.373874,
			created_at: new Date(),
			updated_at: new Date(),
		}, ], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete(addressesTable, null, {});
	}
};
