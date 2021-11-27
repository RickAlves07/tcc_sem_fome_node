import { ICryptography } from '@/infra/protocols';
import { InvalidToken, NoAuthTokenInHeader, Unauthorized } from '@/shared/errors';
import { ok, unauthorized } from '@/shared/helper';
import { HttpRequest, HttpResponse } from '../protocols';

export const AuthMiddleware = (cryptography: ICryptography) => {
	async (req: HttpRequest): Promise<HttpResponse> => {
		try {
			const token = getToken(req);
			const decoded = await cryptography.decrypt(token)

			const { id, profile_type } = decoded;

			return ok({ authUser: id, profile_type})
		} catch (err){
			if (err instanceof Unauthorized) {
				throw new InvalidToken();
		 	}
			return unauthorized(err);
		}
	}
}

function  getToken(req: HttpRequest) {
	const authHeader = req.headers.authorization;

	if (!authHeader) {
		throw new NoAuthTokenInHeader();
	}

	const [prefix, token] = authHeader.split(' ');

	if (prefix !== 'Bearer') {
		throw new InvalidToken();
	}

	return token;
}


