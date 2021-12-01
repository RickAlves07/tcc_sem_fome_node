'use strict';
const donationsPackagesTable = 'donations_packages';
const scheduled_1 = new Date();
const scheduled_2 = new Date();
const scheduled_3 = new Date();
scheduled_1.setDate(scheduled_1.getDate() + 1);
scheduled_2.setDate(scheduled_2.getDate() + 2),
scheduled_3.setDate(scheduled_3.getDate() + 5),

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(donationsPackagesTable, [{
			id: 1,
			status: 'Recebido',
			total_items: 4,
			total_weight: 15.5,
			comments: 'alguma observação',
			shipment_id: 1,
			user_donor_id: 1,
			address_donor_id: 1,
			organization_distributor_id: 3,
			scheduled_at: scheduled_1,
			created_at: new Date(),
			updated_at: new Date(),
		}, {
			id: 2,
			status: 'Em rota de Entrega',
			total_items: 8,
			total_weight: 20,
			comments: null,
			shipment_id: 2,
			user_donor_id: 1,
			address_donor_id: 1,
			organization_distributor_id: 3,
			scheduled_at: scheduled_2,
			created_at: new Date(),
			updated_at: new Date(),
		}, {
			id: 3,
			status: 'Aguardando um Transportador',
			total_items: 3,
			total_weight: 10.4,
			comments: 'algum comentario',
			shipment_id: 3,
			user_donor_id: 1,
			address_donor_id: 1,
			organization_distributor_id: 3,
			scheduled_at: scheduled_3,
			created_at: new Date(),
			updated_at: new Date(),
		}, ], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete(donationsPackagesTable, null, {});
	}
};
