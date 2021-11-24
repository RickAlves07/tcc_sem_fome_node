import { inject, injectable } from 'tsyringe';

import { Controller, Post } from '@/presentation/decorators';
import { BaseController, HttpRequest, HttpResponse } from '@/presentation/protocols';
import { ok } from '@/shared/helper';
import { ISignUp } from '@/domain/usecases';

@injectable()
@Controller('/sign-up')
export class SignUpController extends BaseController {
	constructor(
		@inject('SignUp')
		private signUp: ISignUp,
	){
		super()
	}

	@Post('/')
	async store(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.signUp.new(req.body);

		return ok(response);
	}
}
