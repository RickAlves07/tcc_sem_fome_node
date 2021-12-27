export const requestMethods = {
	Get: 'get',
	Post: 'post',
	Put: 'put',
	Patch: 'patch',
	Delete: 'delete',
}

export const emptyString = '';

export const emptyArray = [];

export const tempUserFiledData = 'Aguardando Ativação';

export const donationPackagesStatus = {
	WaitingATransporter: 'Aguardando um Transportador',
	WaitingForPickup: 'Aguardando Coleta',
	OnDeliveryRoute: 'Em rota de Entrega',
	Delivered: 'Entregue',
	Received: 'Recebido',
	ReturningToDonor: 'Retornado ao Doador',
	Returned: 'Devolvido',
	Canceled: 'Cancelado',
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
	'shipments-in-progress': [
		donationPackagesStatus.WaitingForPickup,
		donationPackagesStatus.OnDeliveryRoute,
		donationPackagesStatus.ReturningToDonor,
	],
	'shipments-history': [
		donationPackagesStatus.Delivered,
		donationPackagesStatus.Received,
		donationPackagesStatus.Returned,
		donationPackagesStatus.Canceled,
	],
	'transfers-history': [
		donationPackagesStatus.Delivered,
		donationPackagesStatus.Received,
		donationPackagesStatus.Returned,
		donationPackagesStatus.Canceled,
	],
	'transfers-in-progress': [
		donationPackagesStatus.WaitingATransporter,
		donationPackagesStatus.WaitingForPickup,
		donationPackagesStatus.OnDeliveryRoute,
		donationPackagesStatus.ReturningToDonor,
	],
}
export const statusToReturnByRouteParamList = {
	InProgress:'in-progress',
	History: 'history',
	Available: 'available',
	OnTheWay:'on-the-way',
	Received: 'received',
	ShipmentsInProgress: 'shipments-in-progress',
	ShipmentsHistory: 'shipments-history',
	TransfersHistory: 'transfers-history',
	TransfersInProgress: 'transfers-in-progress',
}

export const profilesTypes = {
	Donor: 'donor',
	Transporter: 'transporter',
	Distributor: 'distributor',
}
