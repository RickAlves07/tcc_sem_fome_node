import { ApplicationHeathController } from '@/presentation/controllers';

describe('Application health', () => {

	it('Should return application status Ok', async () => {
		const applicationHeathController = new ApplicationHeathController();

		const resp = await applicationHeathController.status();

		expect(resp.body.ApiStatus).toEqual('Ok');
	});
})
