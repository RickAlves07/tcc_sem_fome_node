import { injectable, inject } from 'tsyringe';
import { GetAddress, IGetAddress } from '@/domain/usecases/address';
import { IAddressRepository } from '@/infra/db/repositories/address';


@injectable()
export class DbGetAddress implements IGetAddress {

	constructor(
		@inject('AddressRepository')
		private addressRepository: IAddressRepository,
	) {}

	async get(data: GetAddress.Params): Promise<GetAddress.Result> {

		const addressFound = await this.addressRepository.findById(data.id);

		return addressFound;
	}
}
