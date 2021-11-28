export const requestMethods = {
	Get: 'get',
	Post: 'post',
	Put: 'put',
	Patch: 'patch',
	Delete: 'delete',
}

export const emptyString = '';

export const emptyArray = [];

export const tempUserFiledData = 'waiting activation';

export const donationPackagesStatus = {
	WaitingATransporter: 'waiting a transporter',
	WaitingForPickup: 'waiting for pickup',
	OnDeliveryRoute: 'on delivery route',
	Delivered: 'delivered',
	Received: 'received',
	ReturningToDonor: 'returning to donor',
	Returned: 'returned',
	Canceled: 'canceled',
}

export const donationsByStatusToReturnByRouteParam = {
	'in-progress': [
		donationPackagesStatus.WaitingATransporter,
		donationPackagesStatus.WaitingForPickup,
		donationPackagesStatus.OnDeliveryRoute,
		donationPackagesStatus.ReturningToDonor,
	],
	'history': [
		donationPackagesStatus.Delivered,
		donationPackagesStatus.Received,
		donationPackagesStatus.Returned,
		donationPackagesStatus.Canceled,
	],
	'available': [
		donationPackagesStatus.WaitingATransporter,
	],
	'on-the-way': [
		donationPackagesStatus.WaitingATransporter,
		donationPackagesStatus.WaitingForPickup,
		donationPackagesStatus.OnDeliveryRoute,
	],
	'received': [
		donationPackagesStatus.Delivered,
		donationPackagesStatus.Received,
	],
}

export const profilesTypes = {
	Donor: 'donor',
	Transporter: 'transporter',
	Distributor: 'distributor',
}
