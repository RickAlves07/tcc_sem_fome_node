import { injectable, inject } from 'tsyringe';
import { Controller, Delete, Get, Patch, Post } from '@/presentation/decorators';
import { BaseController, HttpRequest, HttpResponse } from '@/presentation/protocols';
import { ok } from '@/shared/helper';
import { IAddShipment, IDeleteShipment, IGetShipment, IListShipments, IUpdateShipment } from '@/domain/usecases';

@injectable()
@Controller('/shipment')
export class ShipmentController extends BaseController {
	constructor(
		@inject('AddShipment')
		private addShipment: IAddShipment,

		@inject('GetShipment')
		private getShipment: IGetShipment,

		@inject('ListShipments')
		private listShipments: IListShipments,

		@inject('UpdateShipment')
		private updateShipment: IUpdateShipment,

		@inject('DeleteShipment')
		private deleteShipment: IDeleteShipment,
		) {
		super();
	}

	@Post('/')
	async store(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.addShipment.add(req.body);

		return ok(response);
	}

	@Get('/')
	async show(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.getShipment.get(req.body);

		return ok(response);
	}

	@Get('/list')
	async index(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.listShipments.list(req.body);

		return ok(response);
	}

	@Patch('/update')
	async update(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.updateShipment.update(req.body);

		return ok(response);
	}

	@Delete('/')
	async destroy(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.deleteShipment.delete(req.body);

		return ok(response);
	}
}
