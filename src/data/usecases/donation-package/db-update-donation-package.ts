import { Shipment } from '@/domain/models/shipment';
import { donationPackagesStatus } from '@/shared/utils/constants';
import { DonationPackage } from '@/domain/models/donation-package';
import { injectable, inject } from 'tsyringe';
import { UpdateDonationPackage, IUpdateDonationPackage, IAddShipment, IUpdateShipment, IDeleteShipment } from '@/domain/usecases';
import { IDonationPackageRepository } from '@/infra/db/repositories';
import { InvalidAction } from '@/shared/errors';
import { AuthUser } from '@/domain/models/auth';

@injectable()
export class DbUpdateDonationPackage implements IUpdateDonationPackage {

	constructor(
		@inject('DonationPackageRepository')
		private donationPackageRepository: IDonationPackageRepository,

		@inject('AddShipment')
		private addShipment: IAddShipment,

		@inject('UpdateShipment')
		private updateShipment: IUpdateShipment,

		@inject('DeleteShipment')
		private deleteShipment: IDeleteShipment,
	) {}

	async updateData(data: UpdateDonationPackage.Params): Promise<UpdateDonationPackage.Result> {

		const savedDonation = await this.donationPackageRepository.findById(data.donation_id);

		const actionDonation = await this.getActionMethod(data, savedDonation);

		let response = await actionDonation();

		if(Boolean(response[0])){
			response = await this.donationPackageRepository.findById(data.donation_id);
		}

		return response;
	}

	private async getActionMethod(data: UpdateDonationPackage.Params, savedDonation: DonationPackage) : Promise<any> {
		const actionsDonationMap = {
			"confirm-collected": () => this.confirmDonationCollected(savedDonation, data.auth_user),
			"confirm-received": () => this.confirmDonationReceived(savedDonation, data.auth_user),
			"confirm-delivered": () => this.confirmDonationDelivered(savedDonation, data.auth_user),
			"confirm-returned": () => this.confirmDonationReturned(savedDonation, data.auth_user),
			"confirm-donate-again": () => this.confirmDonateAgain(savedDonation, data.auth_user),
			"cancel-donation": () => this.cancelDonation(savedDonation, data.auth_user),
			"accept-transport": () => this.confirmDonationTransport(savedDonation, data.auth_user),
			"cancel-transport": () => this.cancelDonationTransport(savedDonation, data.auth_user),
			"cancel-transport-return": () => this.cancelTransportAndReturn(savedDonation, data.auth_user),
		}

		const actionDonation = actionsDonationMap[data.action];

		if(actionDonation === null || actionDonation === undefined)	{
			throw new InvalidAction(`unknown action`);
		}
		return actionDonation;
	}

	private async confirmDonationCollected(savedDonation: DonationPackage, authUser: AuthUser) {

		if(savedDonation.status !== donationPackagesStatus.WaitingForPickup &&
			savedDonation.status !== donationPackagesStatus.OnDeliveryRoute
		){
			throw new InvalidAction(`Cannot confirm collected with ${savedDonation.status}`);
		}
		await this.updateShipmentData(savedDonation, authUser, { collected_at: new Date()});
		return await this.updateDonation(savedDonation, donationPackagesStatus.OnDeliveryRoute);
	}

	private async confirmDonationReceived(savedDonation: DonationPackage, authUser: AuthUser) {

		if(
			savedDonation.status !== donationPackagesStatus.OnDeliveryRoute &&
			savedDonation.status === donationPackagesStatus.Received
		){
			throw new InvalidAction(`Cannot confirm received with ${savedDonation.status}`);
		}
		await this.updateShipmentData(savedDonation, authUser, { delivered_at: new Date()});
		return await this.updateDonation(savedDonation, donationPackagesStatus.Received);
	}

	private async confirmDonationDelivered(savedDonation: DonationPackage, authUser: AuthUser) {

		if(
			savedDonation.status !== donationPackagesStatus.OnDeliveryRoute &&
			savedDonation.status !== donationPackagesStatus.Received &&
			savedDonation.status === donationPackagesStatus.Delivered
		){
			throw new InvalidAction(`Cannot confirm delivered with ${savedDonation.status}`);
		}
		await this.updateShipmentData(savedDonation, authUser, { delivered_at: new Date()});
		return await this.updateDonation(savedDonation, donationPackagesStatus.Delivered);
	}


	private async confirmDonationReturned(savedDonation: DonationPackage, authUser: AuthUser) {

		if(
			savedDonation.status !== donationPackagesStatus.ReturningToDonor &&
			savedDonation.status === donationPackagesStatus.Returned
		){
			throw new InvalidAction(`Cannot confirm returned with ${savedDonation.status}`);
		}
		return await this.updateDonation(savedDonation, donationPackagesStatus.Returned);
	}

	private async confirmDonateAgain(savedDonation: DonationPackage, authUser: AuthUser) {

		if(
			savedDonation.status !== donationPackagesStatus.Returned &&
			savedDonation.status !== donationPackagesStatus.WaitingATransporter
		){
			throw new InvalidAction(`Cannot accept with ${savedDonation.status}`);
		}
		return await this.updateDonation(savedDonation, donationPackagesStatus.WaitingATransporter);
	}

	private async cancelDonation(savedDonation: DonationPackage, authUser: AuthUser) {

		if(
			savedDonation.status !== donationPackagesStatus.WaitingForPickup &&
			savedDonation.status === donationPackagesStatus.Canceled
		){
			throw new InvalidAction(`Cannot cancel with ${savedDonation.status}`);
		}
		return await this.updateDonation(savedDonation, donationPackagesStatus.Canceled);
	}

	private async confirmDonationTransport(savedDonation: DonationPackage, authUser: AuthUser) {

		if(
			savedDonation.status !== donationPackagesStatus.WaitingATransporter &&
			savedDonation.status === donationPackagesStatus.WaitingForPickup
		){
			throw new InvalidAction(`Cannot accept with ${savedDonation.status}`);
		}

		const shipment = await this.createShipment(savedDonation, authUser);
		savedDonation.shipment_id = shipment.id;

		return await this.updateDonation(savedDonation, donationPackagesStatus.WaitingForPickup);
	}

	private async cancelDonationTransport(savedDonation: DonationPackage, authUser: AuthUser) {

		if(
			savedDonation.status !== donationPackagesStatus.WaitingForPickup &&
			savedDonation.status === donationPackagesStatus.WaitingATransporter
		){
			throw new InvalidAction(`Cannot accept with ${savedDonation.status}`);
		}
		await this.deleteShipmentData(savedDonation, authUser);
		return await this.updateDonation(savedDonation, donationPackagesStatus.WaitingATransporter);
	}

	private async cancelTransportAndReturn(savedDonation: DonationPackage, authUser: AuthUser) {

		if(
			savedDonation.status !== donationPackagesStatus.OnDeliveryRoute &&
			savedDonation.status === donationPackagesStatus.ReturningToDonor
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

	private async createShipment(savedDonation: DonationPackage, authUser: AuthUser) : Promise<Shipment>{

		return await this.addShipment.add({
			auth_user: authUser,
			organization_distributor_id: savedDonation.organization_distributor_id,
		})
	}

	private async updateShipmentData(savedDonation: DonationPackage, authUser: AuthUser, dataToUpdate: {}) {

		await this.updateShipment.update( {
			auth_user: authUser,
			shipment_id: savedDonation.shipment_id,
			...dataToUpdate,
		} );
	}

	private async deleteShipmentData(savedDonation: DonationPackage, authUser: AuthUser) {

		await this.deleteShipment.delete({
			auth_user: authUser,
			shipment_id: savedDonation.shipment_id,
		});
	}
}
