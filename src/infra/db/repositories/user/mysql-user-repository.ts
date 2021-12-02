import { IUserRepository } from '.';
import { MySqlBaseRepository } from '@/shared/infra/db/repositories';
import { User, UserModel } from '@/domain/models/user';
import { InternalDatabaseError } from '@/shared/errors';

export class MySqlUserRepository extends MySqlBaseRepository<User>
implements IUserRepository
{
	constructor() {
		super();
		this.ormRepository = UserModel;
	}

	public async findByEmail(email: string): Promise<User> {
		try {
			return await super.findWithConditions({ where: { email: email }});
		} catch (error) {
			throw new InternalDatabaseError(error)
		}
	}

	public async save(data: User, conditions?: {}): Promise<User> {
		try {
			return await super.save(data, { attributes: { exclude: ['password'] }});
		} catch (error) {
			throw new InternalDatabaseError(error)
		}
	}
}
