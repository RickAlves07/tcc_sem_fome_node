import { injectable, inject } from 'tsyringe';
import { IAddAddress, IGetAddress, IListAddresses, IUpdateAddress } from '@/domain/usecases/address';
import { Controller, Get, Patch, Post } from '@/presentation/decorators';
import { BaseController, HttpRequest, HttpResponse } from '@/presentation/protocols';
import { ok } from '@/shared/helper';

@injectable()
@Controller('/address')
export class AddressController extends BaseController {

	constructor(
		@inject('GetAddress')
		private getAddress: IGetAddress,

		@inject('ListAddresses')
		private listAddresses: IListAddresses,

		@inject('UpdateAddress')
		private updateAddress: IUpdateAddress,

		@inject('AddAddress')
		private addAddress: IAddAddress,
		) {
		super();
	}

	@Post('/create')
	async store(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.addAddress.add(req.body);

		return ok(response);
	}

	@Patch('/update')
	async update(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.updateAddress.update(req.body);

		return ok(response);
	}

	@Get('/')
	async show(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.getAddress.get(req.body);

		return ok(response);
	}

	@Get('/list')
	async list(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.listAddresses.list(req.body);

		return ok(response);
	}
}
