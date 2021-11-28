'use strict';
const shipmentsTable = 'shipments';
const collected_1 = new Date();
const delivered_1 = new Date();
const collected_2 = new Date();
collected_1.setDate(collected_1.getDate() + 1),
delivered_1.setDate(delivered_1.getDate() + 1),
collected_2.setDate(collected_2.getDate() + 2),

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(shipmentsTable, [{
			id: 1,
			user_transporter_id: 2,
			organization_distributor_id: 3,
			collected_at: collected_1,
			delivered_at: delivered_1,
			created_at: new Date(),
			updated_at: new Date(),
		}, {
			id: 2,
			user_transporter_id: 2,
			organization_distributor_id: 3,
			collected_at: collected_2,
			delivered_at: null,
			created_at: new Date(),
			updated_at: new Date(),
		}, {
			id: 3,
			user_transporter_id: 2,
			organization_distributor_id: 3,
			collected_at: null,
			delivered_at: null,
			created_at: new Date(),
			updated_at: new Date(),
		}, ], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete(shipmentsTable, null, {});
	}
};
