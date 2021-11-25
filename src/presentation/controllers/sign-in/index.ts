import { injectable, inject } from 'tsyringe';
import { Controller, Post } from '@/presentation/decorators';
import { BaseController, HttpRequest, HttpResponse } from '@/presentation/protocols';
import { ok } from '@/shared/helper';
import { ISignIn } from '@/domain/usecases';

@injectable()
@Controller('/login')
export class SignInController extends BaseController {
	constructor(
		@inject('SignIn')
		private signIn: ISignIn,
		) {
		super();
	}

	@Post('/')
	async login(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.signIn.login(req.body);

		return ok(response);
	}
}
