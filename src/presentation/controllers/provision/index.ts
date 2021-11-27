import { injectable } from 'tsyringe';
import { Controller } from '@/presentation/decorators';
import { BaseController } from '@/presentation/protocols';

@injectable()
@Controller('/provision')
export class ProvisionController extends BaseController {
	constructor(
	) {
		super();
	}
}
