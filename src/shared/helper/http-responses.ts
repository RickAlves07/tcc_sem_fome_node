import { HttpResponse } from '@/presentation/protocols';
import StatusCodes from 'http-status-codes';
import { AppException } from '../errors/app-exceptions';

const { FORBIDDEN, BAD_REQUEST, UNAUTHORIZED, OK, INTERNAL_SERVER_ERROR, NO_CONTENT} = StatusCodes;

export const badRequest = (error: AppException): HttpResponse => ({
	statusCode: BAD_REQUEST,
	body: error,
});

export const forbidden = (error: AppException): HttpResponse => ({
	statusCode: FORBIDDEN,
	body: error,
});

export const unauthorized = (error: AppException): HttpResponse => ({
	statusCode: UNAUTHORIZED,
	body: error,
});

export const internalServerError = (error: AppException): HttpResponse => ({
	statusCode: INTERNAL_SERVER_ERROR,
	body: error,
});

export const ok = (data: any): HttpResponse => ({
	statusCode: OK,
	body: data,
});

export const noContent = (): HttpResponse => ({
	statusCode: NO_CONTENT,
	body: null,
});
