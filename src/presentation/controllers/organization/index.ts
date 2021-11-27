import { injectable} from 'tsyringe';
import { Controller } from '@/presentation/decorators';
import { BaseController } from '@/presentation/protocols';

@injectable()
@Controller('/organization')
export class OrganizationController extends BaseController {
	constructor(
	) {
		super();
	}
}
