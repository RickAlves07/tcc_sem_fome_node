import { injectable, inject } from 'tsyringe';
import { UpdateUser, IUpdateUser } from '@/domain/usecases/user';
import { IUserRepository } from '@/infra/db/repositories/user';

@injectable()
export class DbUpdateUser implements IUpdateUser {

	constructor(
		@inject('UserRepository')
		private userRepository: IUserRepository,
	) {}

	async update(data: UpdateUser.Params): Promise<UpdateUser.Result> {

		const {
			id,
			name,
			cpf,
			email,
			phone_number,
			password,
			profile_type,
			address_id,
			activated_at,
		} = data

		const updatedUser = await this.userRepository.update({
			name,
			cpf,
			email,
			phone_number,
			password,
			profile_type,
			address_id,
			activated_at,
		}, id );

		return updatedUser;
	}
}
