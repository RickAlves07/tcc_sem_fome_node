import { injectable, inject } from 'tsyringe';
import {  IUpdateAddress } from '@/domain/usecases/address';
import { Controller, Patch } from '@/presentation/decorators';
import { BaseController, HttpRequest, HttpResponse } from '@/presentation/protocols';
import { ok } from '@/shared/helper';

@injectable()
@Controller('/address')
export class AddressController extends BaseController {

	constructor(
		@inject('UpdateAddress')
		private updateAddress: IUpdateAddress,
	) {
		super();
	}

	@Patch('/update', [])
	async update(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.updateAddress.update(req.body);

		return ok(response);
	}
}
