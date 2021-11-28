import { injectable, inject, container } from 'tsyringe';
import { Controller, Get, Patch } from '@/presentation/decorators';
import { BaseController, HttpRequest, HttpResponse } from '@/presentation/protocols';
import { ok } from '@/shared/helper';
import { IListShipments, IUpdateShipment } from '@/domain/usecases';
import { AuthMiddleware, ParametersValidator } from '@/presentation/middlewares';
import { JwtAdapter } from '@/infra/adapters';
import { profilesTypes } from '@/shared/utils';
import { listShipmentsSchema } from './parameters-schemas';

@injectable()
@Controller('/shipment')
export class ShipmentController extends BaseController {
	constructor(
		@inject('ListShipments')
		private listShipments: IListShipments,

		@inject('UpdateShipment')
		private updateShipment: IUpdateShipment,
	) {
		super();
	}

	@Get('/list', [
		AuthMiddleware(container.resolve(JwtAdapter), [profilesTypes.Transporter]),
		ParametersValidator(listShipmentsSchema)
	])
	async index(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.listShipments.list(req.body);

		return ok(response);
	}

	@Patch('/update', [
		AuthMiddleware(container.resolve(JwtAdapter), [profilesTypes.Transporter]),
		ParametersValidator(listShipmentsSchema)
	])
	async update(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.updateShipment.update(req.body);

		return ok(response);
	}
}
