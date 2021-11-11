import { Model, DataTypes } from 'sequelize';

export class OrganizationModel extends Model {
	static start(connection) {
		OrganizationModel.init({
			name: DataTypes.STRING,
			cnpj: DataTypes.STRING,
			email: DataTypes.STRING,
			phone_number: DataTypes.STRING,
		}, {
			sequelize: connection,
			tableName: 'organizations'
		})
		return OrganizationModel;
	}

	static associate(models) {
		OrganizationModel.belongsTo(models.UserModel, { foreignKey: 'owner_id', as: 'organization_owner_user'});
		OrganizationModel.belongsTo(models.AddressModel, { foreignKey: 'address_id', as: 'organization_address'});
	}
}
