import { Controller, Get } from '@/presentation/decorators';
import { BaseController, HttpResponse } from '@/presentation/protocols';
import { ok } from '@/shared/helper';

@Controller('/health')
export class ApplicationHeathController extends BaseController {
	constructor(
	){
		super()
	}

	@Get('/status')
	async status(): Promise<HttpResponse> {

		const response = { ApiStatus: 'Ok'};

		return ok(response);
	}
}
