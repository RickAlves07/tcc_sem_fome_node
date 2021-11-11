import { injectable, inject } from 'tsyringe';
import { Controller, Get, Patch } from '@/presentation/decorators';
import { BaseController, HttpRequest, HttpResponse } from '@/presentation/protocols';
import { ok } from '@/shared/helper';
import { IGetOrganization, IListOrganizations, IUpdateOrganization } from '@/domain/usecases';

@injectable()
@Controller('/organization')
export class OrganizationController extends BaseController {
	constructor(

		@inject('GetOrganization')
		private getOrganization: IGetOrganization,

		@inject('ListOrganizations')
		private listOrganizations: IListOrganizations,

		@inject('UpdateOrganization')
		private updateOrganization: IUpdateOrganization,
		) {
		super();
	}

	@Get('/')
	async show(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.getOrganization.get(req.body);
		return ok(response);
	}

	@Get('/list')
	async index(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.listOrganizations.list(req.body);
		return ok(response);
	}

	@Patch('/update')
	async update(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.updateOrganization.update(req.body);
		return ok(response);
	}
}
