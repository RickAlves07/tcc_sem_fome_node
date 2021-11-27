import { injectable, inject } from 'tsyringe';
import { Controller, Get, Post } from '@/presentation/decorators';
import { BaseController, HttpRequest, HttpResponse } from '@/presentation/protocols';
import { ok } from '@/shared/helper';
import { IAddDonationPackage, IListDonationsPackages } from '@/domain/usecases';

@injectable()
@Controller('/donation')
export class DonationPackageController extends BaseController {
	constructor(
		@inject('AddDonationPackage')
		private addDonationPackage: IAddDonationPackage,

		@inject('ListDonationsPackages')
		private listDonationsPackages: IListDonationsPackages,
	) {
		super();
	}

	@Post('/')
	async store(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.addDonationPackage.add(req.body);
		return ok(response);
	}

	@Get('/list')
	async index(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.listDonationsPackages.list(req.query);
		return ok(response);
	}
}
