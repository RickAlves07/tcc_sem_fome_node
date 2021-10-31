export const requestMethods = {
	Get: 'get',
	Post: 'post',
	Put: 'put',
	Patch: 'patch',
	Delete: 'delete',
}

export const emptyString = '';

export const donationPackagesStatus = {
	Available: 'available',
	Updated: 'updated',
	WaitingTransporter: 'waiting transporter',
	InTransport:'in transport',
	Delivered: 'delivered',
	Received: 'received',
	Canceled: 'canceled',
}

export const shipmentsStatus = {
	WaitingForPickup:'waiting for pickup',
	OnDeliveryRoute: 'on delivery route',
	Delivered: 'delivered',
	Canceled: 'canceled',
	Returned: 'returned',
}

export const profilesTypes = {
	Donor: 'donor',
	Transporter: 'transporter',
	Distributor: 'distributor',
}
