import { Model, DataTypes } from 'sequelize';
import { Address } from '.';

export class AddressModel extends Model<Address> {
	static start(connection) {
		AddressModel.init({
			zip_code: DataTypes.STRING,
			street: DataTypes.STRING,
			address_number: DataTypes.STRING,
			neighborhood: DataTypes.STRING,
			city: DataTypes.STRING,
			state: DataTypes.STRING,
			complement: DataTypes.STRING,
			latitude: DataTypes.FLOAT,
			longitude: DataTypes.FLOAT,
		}, {
			sequelize: connection,
			tableName: 'addresses',
			underscored: true,
		})
		return AddressModel;
	}

	static associate(models) {
		AddressModel.hasMany(models.UserModel, { foreignKey: 'id', as: 'address_users'});
		AddressModel.hasOne(models.OrganizationModel, { foreignKey: 'id', as: 'address_organization'});
		AddressModel.hasMany(models.ShipmentModel, { foreignKey: 'id', as: 'address_shipment'});
		AddressModel.hasMany(models.DonationPackageModel, { foreignKey: 'id', as: 'address_donations'});
	}
}
