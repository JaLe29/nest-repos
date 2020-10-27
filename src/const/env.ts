import { getEnv } from 'utils/env';

export const ENV_PORT = getEnv('PORT') as number;

export const ENV_ENV = getEnv('ENV', false) as string;

export const ENV_DB = getEnv('DB');
