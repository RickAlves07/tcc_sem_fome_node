import { donationPackagesStatus } from '@/shared/utils/constants';
import { DonationPackage } from '@/domain/models/donation-package';
import { injectable, inject } from 'tsyringe';
import { UpdateDonationPackage, IUpdateDonationPackage, IAddShipment } from '@/domain/usecases';
import { IDonationPackageRepository } from '@/infra/db/repositories';
import { InvalidAction } from '@/shared/errors';

@injectable()
export class DbUpdateDonationPackage implements IUpdateDonationPackage {

	constructor(
		@inject('DonationPackageRepository')
		private donationPackageRepository: IDonationPackageRepository,

		@inject('AddShipment')
		private addShipment: IAddShipment,
	) {}

	async update(data: UpdateDonationPackage.Params): Promise<UpdateDonationPackage.Result> {

		const savedDonation = await this.donationPackageRepository.findById(data.donation_id);

		const actionDonation = await this.getActionMethod(data.action, savedDonation);

		let response = await actionDonation();

		if(Boolean(response[0])){
			response = await this.donationPackageRepository.findById(data.donation_id);
		}

		return response;
	}

	private async getActionMethod(action: string, savedDonation: DonationPackage) : Promise<any> {
		const actionsDonationMap = {
			"confirm-collected": () => this.confirmDonationCollected(savedDonation),
			"confirm-received": () => this.confirmDonationReceived(savedDonation),
			"confirm-delivered": () => this.confirmDonationDelivered(savedDonation),
			"confirm-returned": () => this.confirmDonationReturned(savedDonation),
			"confirm-donate-again": () => this.confirmDonateAgain(savedDonation),
			"cancel-donation": () => this.cancelDonation(savedDonation),
			"accept-transport": () => this.confirmDonationTransport(savedDonation),
			"cancel-transport": () => this.cancelDonationTransport(savedDonation),
			"cancel-transport-return": () => this.cancelTransportAndReturn(savedDonation),
		}

		const actionDonation = actionsDonationMap[action];

		if(actionDonation === null || actionDonation === undefined)	{
			throw new InvalidAction(`unknown action`);
		}
		return actionDonation;
	}

	private async confirmDonationCollected(savedDonation: DonationPackage) {

		if(savedDonation.status !== donationPackagesStatus.WaitingForPickup &&
			savedDonation.status !== donationPackagesStatus.OnDeliveryRoute
		){
			throw new InvalidAction(`Cannot confirm collected with ${savedDonation.status}`);
		}
		return await this.updateDonation(savedDonation, donationPackagesStatus.OnDeliveryRoute);
	}

	private async confirmDonationReceived(savedDonation: DonationPackage) {

		if(
			savedDonation.status !== donationPackagesStatus.OnDeliveryRoute &&
			savedDonation.status !== donationPackagesStatus.Received
		){
			throw new InvalidAction(`Cannot confirm received with ${savedDonation.status}`);
		}
		return await this.updateDonation(savedDonation, donationPackagesStatus.Received);
	}

	private async confirmDonationDelivered(savedDonation: DonationPackage) {

		if(
			savedDonation.status !== donationPackagesStatus.OnDeliveryRoute &&
			savedDonation.status !== donationPackagesStatus.Received &&
			savedDonation.status !== donationPackagesStatus.Delivered
		){
			throw new InvalidAction(`Cannot confirm delivered with ${savedDonation.status}`);
		}
		return await this.updateDonation(savedDonation, donationPackagesStatus.Delivered);
	}

	private async confirmDonationReturned(savedDonation: DonationPackage) {

		if(
			savedDonation.status !== donationPackagesStatus.ReturningToDonor &&
			savedDonation.status !== donationPackagesStatus.Returned
		){
			throw new InvalidAction(`Cannot confirm returned with ${savedDonation.status}`);
		}
		return await this.updateDonation(savedDonation, donationPackagesStatus.Returned);
	}

	private async confirmDonateAgain(savedDonation: DonationPackage) {

		if(
			savedDonation.status !== donationPackagesStatus.Returned &&
			savedDonation.status !== donationPackagesStatus.WaitingATransporter
		){
			throw new InvalidAction(`Cannot accept with ${savedDonation.status}`);
		}
		return await this.updateDonation(savedDonation, donationPackagesStatus.WaitingATransporter);
	}

	private async cancelDonation(savedDonation: DonationPackage) {

		if(
			savedDonation.status !== donationPackagesStatus.WaitingForPickup &&
			savedDonation.status !== donationPackagesStatus.Canceled
		){
			throw new InvalidAction(`Cannot cancel with ${savedDonation.status}`);
		}
		return await this.updateDonation(savedDonation, donationPackagesStatus.Canceled);
	}

	private async confirmDonationTransport(savedDonation: DonationPackage) {

		if(
			savedDonation.status !== donationPackagesStatus.WaitingATransporter &&
			savedDonation.status !== donationPackagesStatus.WaitingForPickup
		){
			throw new InvalidAction(`Cannot accept with ${savedDonation.status}`);
		}

		return await this.updateDonation(savedDonation, donationPackagesStatus.WaitingForPickup);
	}

	private async cancelDonationTransport(savedDonation: DonationPackage) {

		if(
			savedDonation.status !== donationPackagesStatus.WaitingForPickup &&
			savedDonation.status !== donationPackagesStatus.WaitingATransporter
		){
			throw new InvalidAction(`Cannot accept with ${savedDonation.status}`);
		}
		return await this.updateDonation(savedDonation, donationPackagesStatus.WaitingATransporter);
	}

	private async cancelTransportAndReturn(savedDonation: DonationPackage) {

		if(
			savedDonation.status !== donationPackagesStatus.OnDeliveryRoute &&
			savedDonation.status !== donationPackagesStatus.ReturningToDonor
		){
			throw new InvalidAction(`Cannot cancel with ${savedDonation.status}`);
		}
		return await this.updateDonation(savedDonation, donationPackagesStatus.ReturningToDonor);
	}

	private async updateDonation(savedDonation: DonationPackage, statusToUpdate: string) {

		return await this.donationPackageRepository.update({
			...savedDonation,
			status: statusToUpdate
		}, {id: savedDonation.id} );
	}
}
