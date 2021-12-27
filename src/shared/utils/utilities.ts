import { emptyString } from '@/shared/utils';
export default class Utilities {
	static checkIfHasValue(value: any) : boolean {
		return (this.checkIsNotNull(value) && this.checkIsNotNull(value) && this.checkIsNotNull(value))
	}
	static checkIsNotNull(value: any) : boolean {
		return (value !== null);
	}

	static checkIsNotUndefined(value: any) : boolean {
		return (value !== undefined);
	}

	static checkIsNotEmpty(value: any) : boolean {
		return (value !== emptyString);
	}
}
