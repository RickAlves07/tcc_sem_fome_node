import { injectable, inject } from 'tsyringe';
import { ListUsers, IListUsers } from '@/domain/usecases/user';
import { IUserRepository } from '@/infra/db/repositories/user';

@injectable()
export class DbListUsers implements IListUsers {

	constructor(
		@inject('UserRepository')
		private userRepository: IUserRepository,
	) {}

	async list(params: ListUsers.Params): Promise<ListUsers.Result> {

		const users = await this.userRepository.findAll(params.pageIndex, params.pageSize);

		return users;
	}
}
