import { profilesTypes } from './../../../shared/utils/constants';
import { ICryptography } from '@/infra/protocols';
import { injectable, inject, container } from 'tsyringe';
import { Controller, Get, Patch, Post } from '@/presentation/decorators';
import { BaseController, HttpRequest, HttpResponse } from '@/presentation/protocols';
import { ok } from '@/shared/helper';
import { IAddDonationPackage, IListDonationsPackages, IUpdateDonationPackage } from '@/domain/usecases';
import { AuthMiddleware, ParametersValidator } from '@/presentation/middlewares';
import { JwtAdapter } from '@/infra/adapters';
import { addDonationSchema, listDonationsSchema, updateDonationScheme } from './parameters-schemas';

@injectable()
@Controller('/donations')
export class DonationPackageController extends BaseController {
	constructor(
		@inject('AddDonationPackage')
		private addDonationPackage: IAddDonationPackage,

		@inject('ListDonationsPackages')
		private listDonationsPackages: IListDonationsPackages,

		@inject('UpdateDonationPackage')
		private updateDonationPackage: IUpdateDonationPackage,

	) {
		super();
	}

	@Post('/new', [
		AuthMiddleware(container.resolve(JwtAdapter), Object.values(profilesTypes)),
		ParametersValidator(addDonationSchema)
	])
	async store(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.addDonationPackage.add(req.body);
		return ok(response);
	}

	@Get('/list', [
		AuthMiddleware(container.resolve(JwtAdapter), Object.values(profilesTypes)),
		ParametersValidator(listDonationsSchema)
	])
	async index(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.listDonationsPackages.list({...req.query, ...req.body});
		return ok(response);
	}

	@Patch('/update', [
		AuthMiddleware(container.resolve(JwtAdapter), Object.values(profilesTypes)),
		ParametersValidator(updateDonationScheme)
	])
	async update(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.updateDonationPackage.update(req.body);
		return ok(response);
	}
}
