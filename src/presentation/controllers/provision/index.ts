import { injectable, inject } from 'tsyringe';
import { Controller, Delete, Get, Patch } from '@/presentation/decorators';
import { BaseController, HttpRequest, HttpResponse } from '@/presentation/protocols';
import { ok } from '@/shared/helper';
import { IDeleteProvision, IGetProvision, IListProvisions, IUpdateProvision } from '@/domain/usecases';

@injectable()
@Controller('/provision')
export class ProvisionController extends BaseController {
	constructor(
		@inject('GetProvision')
		private getProvision: IGetProvision,

		@inject('ListProvisions')
		private listProvisions: IListProvisions,

		@inject('UpdateProvision')
		private updateProvision: IUpdateProvision,

		@inject('DeleteProvision')
		private deleteProvision: IDeleteProvision,
		) {
		super();
	}

	@Get('/')
	async show(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.getProvision.get(req.body);

		return ok(response);
	}

	@Get('/list')
	async index(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.listProvisions.list(req.body);

		return ok(response);
	}

	@Patch('/update')
	async update(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.updateProvision.update(req.body);

		return ok(response);
	}

	@Delete('/delete')
	async destroy(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.deleteProvision.delete(req.body);

		return ok(response);
	}
}
