import { injectable, inject } from 'tsyringe';
import { AddAddress, IAddAddress } from '@/domain/usecases/address';
import { IAddressRepository } from '@/infra/db/repositories/address';

@injectable()
export class DbAddAddress implements IAddAddress {

	constructor(
		@inject('AddressRepository')
		private addressRepository: IAddressRepository,
	) {}

	async add(data: AddAddress.Params): Promise<AddAddress.Result> {

		return await this.addressRepository.save(data);
	}
}
