import { injectable, inject } from 'tsyringe';
import { Controller, Get, Patch, Post } from '@/presentation/decorators';
import { BaseController, HttpRequest, HttpResponse } from '@/presentation/protocols';
import { ok } from '@/shared/helper';
import { IAddDonationPackage, IGetDonationPackage, IListDonationsPackages, IUpdateDonationPackage } from '@/domain/usecases';

@injectable()
@Controller('/donation')
export class DonationPackageController extends BaseController {
	constructor(
		@inject('AddDonationPackage')
		private addDonationPackage: IAddDonationPackage,

		@inject('GetDonationPackage')
		private getDonationPackage: IGetDonationPackage,

		@inject('ListDonationsPackages')
		private listDonationsPackages: IListDonationsPackages,

		@inject('UpdateDonationPackage')
		private updateDonationPackage: IUpdateDonationPackage,
		) {
		super();
	}

	@Post('/')
	async store(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.addDonationPackage.add(req.body);
		return ok(response);
	}

	@Get('/')
	async show(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.getDonationPackage.get(req.body);
		return ok(response);
	}

	@Get('/list')
	async index(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.listDonationsPackages.list(req.query);
		return ok(response);
	}

	@Patch('/update')
	async update(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.updateDonationPackage.update(req.body);
		return ok(response);
	}
}
