import { InternalDatabaseError } from '@/shared/errors';
import { ModelStatic } from '../models/model-type';
import { IBaseRepository } from './base-repository';

export class MySqlBaseRepository<T extends {}> implements IBaseRepository<T>
{
	protected ormRepository: ModelStatic;

	public async build(data: T): Promise<T> {
		try {
			const response = await this.ormRepository.build(data);

			return response;
		} catch (error) {
			throw new InternalDatabaseError(error)
		}
	}

	public async save(data: T): Promise<T> {
		try {
			const response = await this.ormRepository.create(data);

			return response;
		} catch (error) {
			throw new InternalDatabaseError(error)
		}
	}

	public async findById(id: number): Promise<T | null> {
		try {
			const response = await this.ormRepository.findByPk(id);

			return response;
		} catch (error) {
			throw new InternalDatabaseError(error)
		}
	}

	public async findAll(pageIndex: number, pageSize: number, conditions?: {}): Promise<T[]> {
		try {
			const response = await this.ormRepository.findAll({
				where: conditions,
				offset: (pageIndex - 1) * pageSize,
				limit: pageSize,
			});

			return response;
		} catch (error) {
			throw new InternalDatabaseError(error)
		}
	}

	public async update(data: T, conditions: {}): Promise<T> {
		try {
			const response = await this.ormRepository.update(data, { where: conditions});

			return response;
		} catch (error) {
			throw new InternalDatabaseError(error)
		}
	}

	public async delete(conditions: {}): Promise<void> {
		try {
			return await this.ormRepository.destroy({ where: conditions});
		} catch (error) {
			throw new InternalDatabaseError(error)
		}
	}
}
