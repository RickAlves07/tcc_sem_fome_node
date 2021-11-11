import { injectable, inject } from 'tsyringe';
import { ListAddresses, IListAddresses } from '@/domain/usecases/address';
import { IAddressRepository } from '@/infra/db/repositories/address';

@injectable()
export class DbListAddresses implements IListAddresses {

	constructor(
		@inject('AddressRepository')
		private addressRepository: IAddressRepository,
	) {}

	async list(params: ListAddresses.Params): Promise<ListAddresses.Result> {

		const addresses = await this.addressRepository.findAll(params.pageIndex, params.pageSize);

		return addresses;
	}
}
