import { injectable, inject } from 'tsyringe';
import { DeleteAddress, IDeleteAddress } from '@/domain/usecases/address';
import { IAddressRepository } from '@/infra/db/repositories/address';

@injectable()
export class DbDeleteAddress implements IDeleteAddress {

	constructor(
		@inject('AddressRepository')
		private addressRepository: IAddressRepository,
	) {}

	async delete(data: DeleteAddress.Params): Promise<DeleteAddress.Result> {

		await this.addressRepository.delete(data);

		return true;
	}
}
