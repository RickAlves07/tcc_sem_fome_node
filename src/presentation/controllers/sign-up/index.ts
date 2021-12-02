import { ParametersValidator } from './../../middlewares/parameters-validator';
import { inject, injectable } from 'tsyringe';
import { Controller, Post } from '@/presentation/decorators';
import { BaseController, HttpRequest, HttpResponse } from '@/presentation/protocols';
import { ok } from '@/shared/helper';
import { ISignUp } from '@/domain/usecases';
import { checkEmailSchema, registerSchema } from './parameters-schemas';

@injectable()
@Controller('/register')
export class SignUpController extends BaseController {
	constructor(
		@inject('SignUp')
		private signUp: ISignUp,
	){
		super()
	}

	@Post('/', [ParametersValidator(registerSchema)])
	async store(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.signUp.new(req.body);

		return ok(response);
	}

	@Post('/check', [ParametersValidator(checkEmailSchema)])
	async check(req: HttpRequest): Promise<HttpResponse> {
		let aaa: any;
		const response = await this.signUp.checkRegisterEmail(req.body);

		return ok(response);
	}
}
