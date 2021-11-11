import { inject, injectable } from 'tsyringe';

import { Controller, Post } from '@/presentation/decorators';
import { BaseController, HttpRequest, HttpResponse } from '@/presentation/protocols';
import { ok } from '@/shared/helper';

@injectable()
@Controller('/sign-up')
export class SignUpController extends BaseController {
	constructor(
		// @inject('SignUp')
		// private SignUp: ISignUp,
	){
		super()
	}

	// @Post('/')
	// async store(req: HttpRequest): Promise<HttpResponse> {

	// 	const response = {};

	// 	return ok(response);
	// }
}
