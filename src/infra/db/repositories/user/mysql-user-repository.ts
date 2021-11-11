import { IUserRepository } from '.';
import { MySqlBaseRepository } from '@/shared/infra/db/repositories';
import { User, UserModel } from '@/domain/models/user';

export class MySqlUserRepository extends MySqlBaseRepository<User>
implements IUserRepository
{
	constructor() {
		super();
		this.ormRepository = UserModel;
	}

	public findByEmail(email: string): Promise<User> {

		return null;
	}
}
