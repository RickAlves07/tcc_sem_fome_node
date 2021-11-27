import { injectable } from 'tsyringe';
import { Controller } from '@/presentation/decorators';
import { BaseController } from '@/presentation/protocols';

@injectable()
@Controller('/user')
export class UserController extends BaseController {
	constructor(
	){
		super()
	}
}
