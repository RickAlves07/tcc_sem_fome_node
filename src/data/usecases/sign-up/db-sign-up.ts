import { tempUserFiledData } from '@/shared/utils/constants';
import { EmailAlreadyRegistered } from '@/shared/errors';
import { Organization } from '@/domain/models/organization';
import { Address } from '@/domain/models/address';
import { User } from '@/domain/models/user';
import { injectable, inject } from 'tsyringe';
import { IAddAddress,
		IAddOrganization,
		IAddUser,
		IGetUser,
		SignUp,
		ISignUp,
		ISignIn,
		SignIn} from '@/domain/usecases';
import { IHasher } from '@/infra/protocols';
import { IUserRepository } from '@/infra/db/repositories';

@injectable()
export class DbSignUp implements ISignUp {

	constructor(
		@inject('AddAddress')
		private addAddress: IAddAddress,

		@inject('AddUser')
		private addUser: IAddUser,

		@inject('UserRepository')
		private userRepository: IUserRepository,

		@inject('AddOrganization')
		private addOrganization: IAddOrganization,

		@inject('Hasher')
		private hasher: IHasher,

		@inject('SignIn')
		private signIn: ISignIn,
	) {}

	async checkRegisterEmail(data: any): Promise<boolean> {
		return await this.isUserEmailAlreadyRegistered(data.email);
	}

	async new(data: SignUp.Params): Promise<SignUp.Result> {

		await this.isUserEmailAlreadyRegistered(data.user.email);

		const savedAddress = await this.saveAddress(data.address);

		const savedUser = await this.saveUser(data.user, savedAddress.id);

		if(data.organization) {
			await this.saveOrganization(data.organization, savedUser.id, savedAddress.id);
		}

		if(data.representatives) {
			await this.saveRepresentatives(data.representatives, savedAddress.id, savedUser);
		}

		return await this.loginUser(data.user)
	}

	private async isUserEmailAlreadyRegistered(userEmail: string) : Promise<boolean> {
		const userFound = await this.userRepository.findByEmail(userEmail);
		if(userFound) {
			throw new EmailAlreadyRegistered();
		}
		return false;
	}

	private async saveAddress(addressData: Address) : Promise<Address> {
		return await this.addAddress.add(addressData);
	}

	private async saveUser(userData: User, savedAddressId: number) : Promise<User> {
		return await this.addUser.add({
			...userData,
			address_id: savedAddressId,
			password: await this.hasher.hash(userData.password),
		});
	}

	private async saveOrganization(organizationData: Organization, ownerId: number, addressId: number) : Promise<Organization> {
		return await this.addOrganization.add({
			...organizationData,
			owner_id: ownerId,
			address_id: addressId,
		});
	}

	private async saveRepresentatives(representativesData: User[], savedAddressId: number, ownerUserData: User) : Promise<User[]> {

		let savedRepresentatives: User[] = [];
		representativesData.forEach(async userData => {
			userData.password = await this.hasher.hash(tempUserFiledData);
			userData.cpf = tempUserFiledData;
			userData.profile_type = ownerUserData.profile_type;
			savedRepresentatives.push(await this.saveUser(userData, savedAddressId))
		});

		return savedRepresentatives;
	}

	private async loginUser(userData: User) : Promise<SignIn.Result> {
		return await this.signIn.login({email: userData.email, password: userData.password});
	}
}
