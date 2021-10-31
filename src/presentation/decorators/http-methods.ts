import { requestMethods } from '@/shared/utils';
import { createRouteDecorator } from './create-decorator';

export const Get = createRouteDecorator(requestMethods.Get);
export const Post = createRouteDecorator(requestMethods.Post);
export const Put = createRouteDecorator(requestMethods.Put);
export const Patch = createRouteDecorator(requestMethods.Patch);
export const Delete = createRouteDecorator(requestMethods.Delete);
