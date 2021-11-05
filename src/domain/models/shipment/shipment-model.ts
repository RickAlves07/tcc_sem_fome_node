import { Model, DataTypes } from 'sequelize';

export class ShipmentModel extends Model {
	static start(connection) {
		ShipmentModel.init({
			status: DataTypes.STRING,
			total_weight: DataTypes.FLOAT,
			expiration_date: DataTypes.DATE,
			scheduled_at: DataTypes.DATE,
			collected_at: DataTypes.DATE,
			delivery_at: DataTypes.DATE,
			created_at: DataTypes.DATE,
			updated_at: DataTypes.DATE,
		}, {
			sequelize: connection,
			tableName: 'shipments'
		})
		return ShipmentModel
	}

	static associate(models) {
		ShipmentModel.belongsTo(models.UserModel, { foreignKey: 'user_transporter_id', as: 'shipment_transporter_user'});
		ShipmentModel.belongsTo(models.UserModel, { foreignKey: 'user_distributor_id', as: 'shipment_distributor_user'});
		ShipmentModel.hasMany(models.DonationPackageModel, { foreignKey: 'id', as: 'shipment_donations_packages'});
	}
}