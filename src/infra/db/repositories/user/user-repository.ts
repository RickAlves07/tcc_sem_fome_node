import { IBaseRepository } from '@/shared/infra/db/repositories';
import { User } from '@/domain/models/user';

export interface IUserRepository extends IBaseRepository<User> {
	findByEmail(email: string): Promise<User>;
	save(data: User): Promise<User>;
}
