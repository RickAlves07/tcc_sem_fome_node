export const requestMethods = {
	Get: 'get',
	Post: 'post',
	Put: 'put',
	Patch: 'patch',
	Delete: 'delete',
}

export const emptyString = '';

export const donationPackagesStatus = {
	WaitingATransporter: 'waiting a transporter',
	WaitingForPickup:'waiting for pickup',
	OnDeliveryRoute: 'on delivery route',
	InTransport:'in transport',
	Delivered: 'delivered',
	Received: 'received',
	ReturningToDonor: 'returning to donor',
	Returned: 'returned',
	Canceled: 'canceled',
}

export const profilesTypes = {
	Donor: 'donor',
	Transporter: 'transporter',
	Distributor: 'distributor',
}
