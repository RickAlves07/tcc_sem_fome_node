import { Controller, Delete, Get, Patch } from '@/presentation/decorators';
import { BaseController, HttpResponse } from '@/presentation/protocols';
import { ok } from '@/shared/helper';

@Controller('/user')
export class UserController extends BaseController {
	constructor(
	){
		super()
	}

	@Get('/')
	async show(): Promise<HttpResponse> {

		const response = {};

		return ok(response);
	}

	@Get('/list')
	async index(): Promise<HttpResponse> {

		const response = {};

		return ok(response);
	}

	@Patch('/update')
	async update(): Promise<HttpResponse> {

		const response = {};

		return ok(response);
	}

	@Delete('/delete')
	async destroy(): Promise<HttpResponse> {

		const response = {};

		return ok(response);
	}
}
