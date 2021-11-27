import { Organization } from '../../../domain/models/organization';
import { AccountNotFound, InvalidUserPassword } from '@/shared/errors';
import { User } from '@/domain/models/user';
import { injectable, inject } from 'tsyringe';
import { IGetUser, SignIn, ISignIn, IGetOrganization} from '@/domain/usecases';
import { ICryptography, IHasher } from '@/infra/protocols';

@injectable()
export class DbSignIn implements ISignIn {

	constructor(
		@inject('GetUser')
		private getUser: IGetUser,

		@inject('GetOrganization')
		private getOrganization: IGetOrganization,

		@inject('Cryptography')
		private cryptography: ICryptography,

		@inject('Hasher')
		private hasher: IHasher,
	) {}

	async login(userCredentials: SignIn.Params): Promise<SignIn.Result> {

		const userRegistered = await this.getUserRegistered(userCredentials.email);

		//await this.userIsActivated(userRegistered); Implementar a ativação do usuario via email antes

		await this.validatePassword(userCredentials.password, userRegistered.password);

		const userOrganization = await this.getUserOrganization(userRegistered);

		const token = await this.generateAuthToken(userRegistered);

		const loginData: LoginData = {
			name: userRegistered.name,
			profileType: userRegistered.profile_type,
			token: token,
		}

		if(userOrganization){
			loginData.organizationName = userOrganization.name
		}

		return loginData;
	}

	private async getUserRegistered(userEmail: string) : Promise<User>
	{
		const userRegistered = await this.getUser.get({email: userEmail});
		if(!userRegistered)
		{
			throw new AccountNotFound();
		}
		return userRegistered;
	}

	private async userIsActivated(userData: User) : Promise<void>
	{
		if(!userData.activated_at)
		{
			throw new InvalidUserPassword();
		}
	}

	private async validatePassword(userCredentialsPassword: string, userRegisteredPassword: string) : Promise<void>
	{
		if(await !this.hasher.compare(userCredentialsPassword, userRegisteredPassword))
		{
			throw new InvalidUserPassword();
		}
	}

	private async generateAuthToken(userData: User) : Promise<string>
	{
		return await this.cryptography.encrypt({id: userData.id, profile_type: userData.profile_type});
	}

	private async getUserOrganization(userData: User) : Promise<Organization>
	{
		return await this.getOrganization.getByAddressId({address_id: userData.address_id});
	}
}

type LoginData = {
	name: string
	profileType: string
	organizationName?: string
	token: string,
}
