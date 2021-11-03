import { Model, DataTypes } from 'sequelize';

export class ProvisionModel extends Model {
	static start(connection) {
		ProvisionModel.init({
			description: DataTypes.STRING,
			quantity: DataTypes.INTEGER,
			weight: DataTypes.FLOAT,
			total_weight: DataTypes.FLOAT,
			expiration_date: DataTypes.DATE,
		}, {
			sequelize: connection,
			tableName: 'provisions'
		})
		return ProvisionModel;
	}

	static associate(models) {
		ProvisionModel.belongsTo(models.DonationPackageModel, { foreignKey: 'donation_package_id', as: 'provision_donation'});
		ProvisionModel.hasOne(models.DonationPackageModel, { foreignKey: 'id', as: 'provision_donation_package'});
	}
}
