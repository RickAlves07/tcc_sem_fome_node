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

	public async findByEmail(email: string): Promise<User> {
		return await super.findWithConditions({ where: { email: email }, attributes: { exclude: ['password']}});
	}

	public async save(data: User, conditions?: {}): Promise<User> {
		return await super.save(data, { attributes: { exclude: ['password'] }
		});
	}
}
