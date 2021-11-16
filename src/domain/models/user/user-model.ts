import { Model, DataTypes } from 'sequelize';

export class UserModel extends Model {
	static start(connection) {
		UserModel.init({
			name: DataTypes.STRING,
			cpf: DataTypes.STRING,
			email: DataTypes.STRING,
			phone_number: DataTypes.STRING,
			password: DataTypes.STRING,
			profile_type: DataTypes.STRING,
			activated_at: DataTypes.DATE,
		}, {
			sequelize: connection,
			tableName: 'users'
		})
		return UserModel;
	}

	static associate(models) {
		UserModel.belongsTo(models.AddressModel, { foreignKey: 'id', as: 'user_address'});
		UserModel.hasMany(models.ShipmentModel, { foreignKey: 'user_transporter_id', as: 'shipments_transporter_user'});
		UserModel.hasMany(models.ShipmentModel, { foreignKey: 'user_distributor_id', as: 'shipments_distributor_user'});
		UserModel.hasOne(models.OrganizationModel, { foreignKey: 'owner_id', as: 'user_organization'});
	}
}
