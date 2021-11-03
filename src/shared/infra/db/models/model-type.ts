import { BuildOptions, Model } from 'sequelize';

export type ModelStatic = typeof Model & (new(values?: object, options?: BuildOptions) => any);

