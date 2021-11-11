import { injectable, inject } from 'tsyringe';
import { Controller, Post } from '@/presentation/decorators';
import { BaseController, HttpRequest, HttpResponse } from '@/presentation/protocols';
import { ok } from '@/shared/helper';

@injectable()
@Controller('/login')
export class LoginController extends BaseController {
	constructor(
		// @inject('AuthUser')
		// private authUser: IAuthUser,
		) {
		super();
	}

	// @Post('/')
	// async auth(req: HttpRequest): Promise<HttpResponse> {

	// 	const response = await this.authUser.auth(req.body);
	// 	return ok(response);
	// }
}
