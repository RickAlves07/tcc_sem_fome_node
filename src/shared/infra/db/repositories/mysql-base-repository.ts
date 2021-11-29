import { InternalDatabaseError } from '@/shared/errors';
import { number } from 'joi';
import { ModelStatic } from '../models/model-type';
import { IBaseRepository } from './base-repository';

export class MySqlBaseRepository<T extends {}> implements IBaseRepository<T>
{
	protected ormRepository: ModelStatic;

	public async build(data: T, conditions?: {}): Promise<T> {
		try {
			const response = await this.ormRepository.build(data, {...conditions});

			return response;
		} catch (error) {
			throw new InternalDatabaseError(error)
		}
	}

	public async save(data: T, conditions?: {}): Promise<T> {
		try {
			const response = await this.ormRepository.create(data, {...conditions});

			return response;
		} catch (error) {
			throw new InternalDatabaseError(error)
		}
	}

	public async findById(id: number, conditions?: {}): Promise<T | null> {
		try {
			const response = await this.ormRepository.findByPk(id, {...conditions});

			return response;
		} catch (error) {
			throw new InternalDatabaseError(error)
		}
	}

	public async findWithConditions(conditions: {}): Promise<T | null> {
		try {
			const response = await this.ormRepository.findOne({...conditions});

			return response;
		} catch (error) {
			throw new InternalDatabaseError(error)
		}
	}

	public async findAll(pageIndex: number, pageSize: number, conditions?: {}, includes?: {}): Promise<T[]> {
		try {
			const response = await this.ormRepository.findAndCountAll({
				offset: Number((pageIndex - 1) * pageSize),
				limit: Number(pageSize),
				...conditions,
				...includes,
			});

			return response;
		} catch (error) {
			throw new InternalDatabaseError(error)
		}
	}

	public async update(data: {}, conditions: {}): Promise<T> {
		try {
			const response = await this.ormRepository.update(data, { where: conditions });

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
