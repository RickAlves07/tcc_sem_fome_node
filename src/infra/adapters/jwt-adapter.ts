import jwt from 'jsonwebtoken';
import { env } from '../../main/env';
import { ICryptography } from '../protocols';

export class JwtAdapter implements ICryptography {
	private readonly secret: string = env.jwtSecret;

	async encrypt(data: any): Promise<string> {
		return jwt.sign(data, this.secret, {
			expiresIn: '1d',
		});
	}

	async decrypt(text: string): Promise<any> {
		return jwt.verify(text, this.secret) as any;
	}
}
