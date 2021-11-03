import { Model, DataTypes } from 'sequelize';

export class DonationPackageModel extends Model {
	static start(connection) {
		DonationPackageModel.init({
			status: DataTypes.STRING,
			total_items: DataTypes.INTEGER,
			total_weight: DataTypes.FLOAT,
			comments: DataTypes.STRING,
			scheduled_at: DataTypes.DATE,
			collected_at: DataTypes.DATE,
		}, {
			sequelize: connection,
			tableName: 'donations-packages'
		})
		return DonationPackageModel;
	}

	static associate(models) {
		DonationPackageModel.belongsTo(models.UserModel, { foreignKey: 'user_donor_id', as: 'donation_user'});
		DonationPackageModel.belongsTo(models.ShipmentModel, { foreignKey: 'shipment_id', as: 'donation_shipment'});
		DonationPackageModel.belongsTo(models.AddressModel, { foreignKey: 'address_donor_id', as: 'donation_address'});
		DonationPackageModel.hasMany(models.ProvisionModel, { foreignKey: 'id', as: 'donation_provisions'});
	}
}
