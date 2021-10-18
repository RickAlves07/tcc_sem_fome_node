import { RequestMethods } from '@/shared/utils';
import { createRouteDecorator } from './create-decorator';

export const Get = createRouteDecorator(RequestMethods.GET);
export const Post = createRouteDecorator(RequestMethods.POST);
export const Put = createRouteDecorator(RequestMethods.PUT);
export const Patch = createRouteDecorator(RequestMethods.PATCH);
export const Delete = createRouteDecorator(RequestMethods.DELETE);
