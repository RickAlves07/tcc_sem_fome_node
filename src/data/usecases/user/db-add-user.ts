import { injectable, inject } from 'tsyringe';
import { AddUser, IAddUser } from '@/domain/usecases/user';
import { IUserRepository } from '@/infra/db/repositories/user';

@injectable()
export class DbAddUser implements IAddUser {

	constructor(
		@inject('UserRepository')
		private userRepository: IUserRepository,
	) {}

	async add(data: AddUser.Params): Promise<AddUser.Result> {

		await this.userRepository.save(data);

		return true;
	}
}
