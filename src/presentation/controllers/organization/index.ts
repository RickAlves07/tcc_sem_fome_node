import { container, inject, injectable} from 'tsyringe';
import { Controller, Get } from '@/presentation/decorators';
import { BaseController, HttpRequest, HttpResponse } from '@/presentation/protocols';
import { IListOrganizations } from '@/domain/usecases';
import { AuthMiddleware, ParametersValidator } from '@/presentation/middlewares';
import { JwtAdapter } from '@/infra/adapters';
import { profilesTypes } from '@/shared/utils';
import { ok } from '@/shared/helper';

@injectable()
@Controller('/organizations')
export class OrganizationController extends BaseController {
	constructor(
		@inject('ListOrganizations')
		private listOrganizations: IListOrganizations,
	) {
		super();
	}

	@Get('/list', [AuthMiddleware(container.resolve(JwtAdapter), Object.values(profilesTypes))])
	async index(req: HttpRequest): Promise<HttpResponse> {

		const response = await this.listOrganizations.listDistributors();

		return ok(response);
	}
}
