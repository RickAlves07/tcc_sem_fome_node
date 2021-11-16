import { injectable, inject } from 'tsyringe';
import { UpdateAddress, IUpdateAddress } from '@/domain/usecases/address';
import { IAddressRepository } from '@/infra/db/repositories/address';

@injectable()
export class DbUpdateAddress implements IUpdateAddress {

	constructor(
		@inject('AddressRepository')
		private addressRepository: IAddressRepository,
	) {}

	async update(data: UpdateAddress.Params): Promise<UpdateAddress.Result> {

		const {
			id,
			zip_code,
			street,
			address_number,
			neighborhood,
			city,
			state,
			complement,
		} = data

		const updatedAddress = await this.addressRepository.update({
				zip_code,
				street,
				address_number,
				neighborhood,
				city,
				state,
				complement,
		}, id );

		return updatedAddress;
	}
}
