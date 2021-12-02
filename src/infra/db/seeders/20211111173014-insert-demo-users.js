'use strict';
const usersTable = 'users';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(usersTable, [{
			id: 1,
			name: 'Usuario Doador 1',
			cpf: '000.000.000-01',
			email: 'doador1@email.com',
			phone_number: '(21) 98765-4321',
			password: '$2b$07$tF7rz8i607MykqGtp2ZYIO4szVAdCn9rjVDPyTj5UZe08MbtwWOla',
			address_id: 1,
			profile_type: 'donor',
			activated_at: new Date(),
			created_at: new Date(),
			updated_at: new Date(),
		}, {
			id: 2,
			name: 'Usuario Transportador 1',
			cpf: '000.000.000-02',
			email: 'transportador1@email.com',
			phone_number: '(21) 98765-4321',
			password: '$2b$07$tF7rz8i607MykqGtp2ZYIO4szVAdCn9rjVDPyTj5UZe08MbtwWOla',
			address_id: 2,
			profile_type: 'transporter',
			activated_at: new Date(),
			created_at: new Date(),
			updated_at: new Date(),
		}, {
			id: 3,
			name: 'Usuario Distribuidor 1',
			cpf: '000.000.000-03',
			email: 'distribuidor1@email.com',
			phone_number: '(21) 98765-4321',
			password: '$2b$07$tF7rz8i607MykqGtp2ZYIO4szVAdCn9rjVDPyTj5UZe08MbtwWOla',
			address_id: 3,
			profile_type: 'distributor',
			activated_at: new Date(),
			created_at: new Date(),
			updated_at: new Date(),
		},{
			id: 4,
			name: 'Usuario Doador 2',
			cpf: '000.000.000-04',
			email: 'doador2@email.com',
			phone_number: '(21) 98765-4321',
			password: '$2b$07$tF7rz8i607MykqGtp2ZYIO4szVAdCn9rjVDPyTj5UZe08MbtwWOla',
			address_id: 4,
			profile_type: 'donor',
			activated_at: new Date(),
			created_at: new Date(),
			updated_at: new Date(),
		}, {
			id: 5,
			name: 'Usuario Transportador 2',
			cpf: '000.000.000-05',
			email: 'transportador2@email.com',
			phone_number: '(21) 98765-4321',
			password: '$2b$07$tF7rz8i607MykqGtp2ZYIO4szVAdCn9rjVDPyTj5UZe08MbtwWOla',
			address_id: 2,
			profile_type: 'transporter',
			activated_at: new Date(),
			created_at: new Date(),
			updated_at: new Date(),
		}, {
			id: 6,
			name: 'Usuario Distribuidor 2',
			cpf: '000.000.000-06',
			email: 'distribuidor2@email.com',
			phone_number: '(21) 98765-4321',
			password: '$2b$07$tF7rz8i607MykqGtp2ZYIO4szVAdCn9rjVDPyTj5UZe08MbtwWOla',
			address_id: 6,
			profile_type: 'distributor',
			activated_at: new Date(),
			created_at: new Date(),
			updated_at: new Date(),
		},],);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete(usersTable, null, {});
	}
};
