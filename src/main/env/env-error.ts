import { ValidationError } from 'class-validator';
export class EnvError {
	constructor(err: any) {
		this.throwEnvValidatorErrors(err);
	}

	private throwEnvValidatorErrors(err: ValidationError[]) {
		err.forEach((item: ValidationError) => {
			for (const key in item.constraints) {
				if (key) {
					const message = item.constraints[key];
					throw new Error(message);
				}
			}
		});
	}
}
