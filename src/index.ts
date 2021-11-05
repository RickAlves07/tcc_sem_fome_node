import 'reflect-metadata';
import 'module-alias/register';
import moduleAlias from 'module-alias';
moduleAlias.addAliases({
  '@': `${__dirname}`,
});
import { Application } from "./main/application";
import './shared/containers';

const application = new Application();

setImmediate(async () => {
	await application.start();
});
