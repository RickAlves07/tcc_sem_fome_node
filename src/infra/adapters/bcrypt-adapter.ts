import { IHasher } from '../protocols/hasher';
import bcrypt from 'bcrypt';
import { env } from '../../main/env';

export class BcryptAdapter implements IHasher {
	private readonly salt: number = env.hashSalt;

	async hash(text: string): Promise<string> {
		return bcrypt.hash(text, this.salt);
	}

	async compare(text: string, digest: string): Promise<boolean> {
		return bcrypt.compare(text, digest);
	}
}
