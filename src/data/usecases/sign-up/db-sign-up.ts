import { EmailAlreadyRegistered } from './../../../shared/errors';
import { Organization } from '@/domain/models/organization';
import { Address } from './../../../domain/models/address';
import { User } from './../../../domain/models/user';
import { injectable, inject } from 'tsyringe';
import { IAddAddress,
		IAddOrganization,
		IAddUser,
		IGetUser,
		SignUp,
		ISignUp } from '@/domain/usecases';

@injectable()
export class DbSignUp implements ISignUp {

	constructor(
		@inject('AddAddress')
		private addAddress: IAddAddress,

		@inject('AddUser')
		private addUser: IAddUser,

		@inject('GetUser')
		private getUser: IGetUser,

		@inject('AddOrganization')
		private addOrganization: IAddOrganization,
	) {}

	async new(data: SignUp.Params): Promise<SignUp.Result> {

		if(await this.isUserEmailAlreadyRegistered(data.user))
		{
			throw new EmailAlreadyRegistered();
		}

		const savedAddress = await this.saveAddress(data.address);

		const savedUser = await this.saveUser(data.user, savedAddress.id);

		if(data.organization)
		{
			await this.saveOrganization(data.organization, savedUser.id, savedAddress.id);
		}

		if(data.representatives)
		{
			await this.saveRepresentatives(data.representatives, savedAddress.id);
		}

		return (savedAddress && savedUser) ? true : false
	}

	private async isUserEmailAlreadyRegistered(userData: User) : Promise<User>
	{
		const testes = await this.getUser.get({ email: userData.email});

		return testes
	}

	private async saveAddress(addressData: Address) : Promise<Address>
	{
		return await this.addAddress.add(addressData);
	}

	private async saveUser(userData: User, savedAddressId: number) : Promise<User>
	{
		return await this.addUser.add({
			...userData,
			address_id: savedAddressId,
		});
	}

	private async saveOrganization(organizationData: Organization, ownerId: number, addressId: number) : Promise<Organization>
	{
		return await this.addOrganization.add({
			...organizationData,
			owner_id: ownerId,
			address_id: addressId,
		});
	}

	private async saveRepresentatives(representativesData: User[], savedAddressId: number) : Promise<User[]>
	{
		let savedRepresentatives: User[] = [];
		representativesData.forEach(async userData => {
			savedRepresentatives.push(await this.saveUser(userData, savedAddressId))
		});

		return savedRepresentatives;
	}
}
