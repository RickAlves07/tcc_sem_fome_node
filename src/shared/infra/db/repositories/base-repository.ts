export interface IBaseRepository<T> {
	build(data: T): Promise<T>;
	save(data: T): Promise<T>;
	findById(id: number): Promise<T | null>;
	findWithConditions(conditions: {})
	findAll(pageIndex: number, pageSize: number, conditions?: {}): Promise<T[]>;
	update(data: {}, conditions: {}): Promise<T>;
	delete(conditions: {}): Promise<void>;
}
