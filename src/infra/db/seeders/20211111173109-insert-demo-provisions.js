'use strict';
const provisionsTable = 'provisions';
const expiration_1 = new Date();
const expiration_2 = new Date();
const expiration_3 = new Date();
const expiration_4 = new Date();
const expiration_5 = new Date();
const expiration_6 = new Date();
expiration_1.setDate(expiration_1.getDate() + 60);
expiration_2.setDate(expiration_2.getDate() + 40),
expiration_3.setDate(expiration_3.getDate() + 70),
expiration_4.setDate(expiration_4.getDate() + 50),
expiration_5.setDate(expiration_5.getDate() + 30),
expiration_6.setDate(expiration_6.getDate() + 80),

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(provisionsTable, [{
			id: 1,
			description: 'Arroz branco 5kg',
			quantity: 3,
			unit_weight: 5,
			total_weight: 15,
			donation_package_id: 1,
			expiration_date: expiration_1,
			created_at: new Date(),
			updated_at: new Date(),
		}, {
			id: 2,
			description: 'Farinha de Trigo 1kg',
			quantity: 1,
			unit_weight: 0.5,
			total_weight: 0.5,
			donation_package_id: 1,
			expiration_date: expiration_2,
			created_at: new Date(),
			updated_at: new Date(),
		}, {
			id: 3,
			description: 'Arroz parbolizado 5kg',
			quantity: 3,
			unit_weight: 5,
			total_weight: 15,
			donation_package_id: 2,
			expiration_date: expiration_3,
			created_at: new Date(),
			updated_at: new Date(),
		}, {
			id: 4,
			description: 'Feijão preto 1kg',
			quantity: 5,
			unit_weight: 1,
			total_weight: 5,
			donation_package_id: 2,
			expiration_date: expiration_4,
			created_at: new Date(),
			updated_at: new Date(),
		}, {
			id: 5,
			description: 'Arroz integral 5kg',
			quantity: 2,
			unit_weight: 5,
			total_weight: 10,
			donation_package_id: 3,
			expiration_date: expiration_5,
			created_at: new Date(),
			updated_at: new Date(),
		}, {
			id: 6,
			description: 'Café pacote 400g',
			quantity: 1,
			unit_weight: 0.4,
			total_weight: 0.4,
			donation_package_id: 3,
			expiration_date: expiration_6,
			created_at: new Date(),
			updated_at: new Date(),
		}, ], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete(provisionsTable, null, {});
	}
};
