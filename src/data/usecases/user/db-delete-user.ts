import { injectable, inject } from 'tsyringe';
import { DeleteUser, IDeleteUser } from '@/domain/usecases/user';
import { IUserRepository } from '@/infra/db/repositories/user';

@injectable()
export class DbDeleteUser implements IDeleteUser {

	constructor(
		@inject('UserRepository')
		private userRepository: IUserRepository,
	) {}

	async delete(data: DeleteUser.Params): Promise<DeleteUser.Result> {

		await this.userRepository.delete(data);

		return true;
	}
}
