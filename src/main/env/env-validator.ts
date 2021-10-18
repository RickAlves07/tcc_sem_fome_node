import { IsInt, IsNotEmpty } from 'class-validator';

export class EnvValidator {
	@IsInt()
	@IsNotEmpty()
	httpPort: number;

	constructor(props: any) {
		this.httpPort = props.httpPort;
		Object.assign(this, props);
	}
}
