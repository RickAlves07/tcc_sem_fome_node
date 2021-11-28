import { AuthUser } from '@/domain/models/auth';
import { ICryptography } from '@/infra/protocols';
import { InvalidToken, NoAuthTokenInHeader, NoPermission } from '@/shared/errors';
import { ok, unauthorized } from '@/shared/helper';
import { HttpRequest, HttpResponse } from '../protocols';

export const AuthMiddleware = (cryptography: ICryptography, profilePermissions: string[]) =>
	async (req: HttpRequest): Promise<HttpResponse> => {
		try {
			const authHeader = req.headers.authorization;

			if (!authHeader) {
				throw new NoAuthTokenInHeader();
			}

			const [prefix, token] = authHeader.split(' ');

			if (prefix !== 'Bearer') {
				throw new InvalidToken();
			}

			const decoded = await cryptography.decrypt(token)

			const { user_id, profile_type } = decoded;

			if(!profilePermissions.includes(profile_type)) {
				throw new NoPermission();
			}

			const auth: AuthUser = {
				user_id: user_id,
				profile_type: profile_type
			}

			return ok({ auth_user: auth });
		} catch (err) {
			return unauthorized(err);
		}
	}
