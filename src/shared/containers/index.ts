import { container } from 'tsyringe';

// data/usecases
import {
	DbAddAddress, DbGetAddress, DbDeleteAddress, DbListAddresses, DbUpdateAddress,
	DbAddDonationPackage, DbGetDonationPackage, DbDeleteDonationPackage, DbListDonationsPackages, DbUpdateDonationPackage,
	DbAddOrganization, DbGetOrganization, DbDeleteOrganization, DbListOrganizations, DbUpdateOrganization,
	DbAddProvision, DbGetProvision, DbDeleteProvision, DbListProvisions, DbUpdateProvision,
	DbAddShipment, DbGetShipment, DbDeleteShipment, DbListShipments, DbUpdateShipment,
	DbAddUser, DbGetUser, DbDeleteUser, DbListUsers, DbUpdateUser,
} from '@/data/usecases';

// interfaces
import {
	IAddAddress, IGetAddress, IDeleteAddress, IListAddresses, IUpdateAddress,
	IAddDonationPackage, IGetDonationPackage, IDeleteDonationPackage, IListDonationsPackages, IUpdateDonationPackage,
	IAddOrganization, IGetOrganization, IDeleteOrganization, IListOrganizations, IUpdateOrganization,
	IAddProvision, IGetProvision, IDeleteProvision, IListProvisions, IUpdateProvision,
	IAddShipment, IGetShipment, IDeleteShipment, IListShipments, IUpdateShipment,
	IAddUser, IGetUser, IDeleteUser, IListUsers, IUpdateUser,
} from '@/domain/usecases';

// repositories
import {
	IAddressRepository, MySqlAddressRepository,
	IDonationPackageRepository, MySqlDonationPackageRepository,
	IOrganizationRepository, MySqlOrganizationRepository,
	IProvisionRepository, MySqlProvisionRepository,
	IShipmentRepository, MySqlShipmentRepository,
	IUserRepository, MySqlUserRepository,
} from '@/infra/db/repositories';

// address
container.registerSingleton<IAddAddress>('AddAddress',DbAddAddress);
container.registerSingleton<IGetAddress>('GetAddress',DbGetAddress);
container.registerSingleton<IDeleteAddress>('DeleteAddress',DbDeleteAddress);
container.registerSingleton<IListAddresses>('ListAddresses',DbListAddresses);
container.registerSingleton<IUpdateAddress>('UpdateAddress',DbUpdateAddress);
container.registerSingleton<IAddressRepository>('AddressRepository',MySqlAddressRepository);

// donation-package
container.registerSingleton<IAddDonationPackage>('AddDonationPackage',DbAddDonationPackage);
container.registerSingleton<IGetDonationPackage>('GetDonationPackage',DbGetDonationPackage);
container.registerSingleton<IDeleteDonationPackage>('DeleteDonationPackage',DbDeleteDonationPackage);
container.registerSingleton<IListDonationsPackages>('ListDonationsPackages',DbListDonationsPackages);
container.registerSingleton<IUpdateDonationPackage>('UpdateDonationPackage',DbUpdateDonationPackage);
container.registerSingleton<IDonationPackageRepository>('DonationPackageRepository',MySqlDonationPackageRepository);

// organization
container.registerSingleton<IAddOrganization>('AddOrganization',DbAddOrganization);
container.registerSingleton<IGetOrganization>('GetOrganization',DbGetOrganization);
container.registerSingleton<IDeleteOrganization>('DeleteOrganization',DbDeleteOrganization);
container.registerSingleton<IListOrganizations>('ListOrganizations',DbListOrganizations);
container.registerSingleton<IUpdateOrganization>('UpdateOrganization',DbUpdateOrganization);
container.registerSingleton<IOrganizationRepository>('OrganizationRepository',MySqlOrganizationRepository);

// provision
container.registerSingleton<IAddProvision>('AddProvision',DbAddProvision);
container.registerSingleton<IGetProvision>('GetProvision',DbGetProvision);
container.registerSingleton<IDeleteProvision>('DeleteProvision',DbDeleteProvision);
container.registerSingleton<IListProvisions>('ListProvisions',DbListProvisions);
container.registerSingleton<IUpdateProvision>('UpdateProvision',DbUpdateProvision);
container.registerSingleton<IProvisionRepository>('ProvisionRepository',MySqlProvisionRepository);

// shipment
container.registerSingleton<IAddShipment>('AddShipment',DbAddShipment);
container.registerSingleton<IGetShipment>('GetShipment',DbGetShipment);
container.registerSingleton<IDeleteShipment>('DeleteShipment',DbDeleteShipment);
container.registerSingleton<IListShipments>('ListShipments',DbListShipments);
container.registerSingleton<IUpdateShipment>('UpdateShipment',DbUpdateShipment);
container.registerSingleton<IShipmentRepository>('ShipmentRepository',MySqlShipmentRepository);

// user
container.registerSingleton<IAddUser>('AddUser',DbAddUser);
container.registerSingleton<IGetUser>('GetUser',DbGetUser);
container.registerSingleton<IDeleteUser>('DeleteUser',DbDeleteUser);
container.registerSingleton<IListUsers>('ListUsers',DbListUsers);
container.registerSingleton<IUpdateUser>('UpdateUser',DbUpdateUser);
container.registerSingleton<IUserRepository>('UserRepository',MySqlUserRepository);
