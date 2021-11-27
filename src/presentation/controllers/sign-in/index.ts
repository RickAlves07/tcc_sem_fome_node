import { injectable, inject } from 'tsyringe';
import { Controller, Post } from '@/presentation/decorators';
import { BaseController, HttpRequest, HttpResponse } from '@/presentation/protocols';
import { ok } from '@/shared/helper';
import { ISignIn } from '@/domain/usecases';
import { ParametersValidator } from '@/presentation/middlewares';
import { loginSchema } from './parameters-schemas';

@injectable()
@Controller('/login')
export class SignInController extends BaseController {
	constructor(
		@inject('SignIn')
		private signIn: ISignIn,
		) {
		super();
	}

	@Post('/', [ParametersValidator(loginSchema)])
	async login(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.signIn.login(req.body);

		return ok(response);
	}
}
