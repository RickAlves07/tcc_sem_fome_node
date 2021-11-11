import { injectable, inject } from 'tsyringe';
import { GetUser, IGetUser } from '@/domain/usecases/user';
import { IUserRepository } from '@/infra/db/repositories/user';


@injectable()
export class DbGetUser implements IGetUser {

	constructor(
		@inject('UserRepository')
		private userRepository: IUserRepository,
	) {}

	async get(data: GetUser.Params): Promise<GetUser.Result> {

		const userFound = await this.userRepository.findByEmail(data.email);

		return userFound;
	}
}
