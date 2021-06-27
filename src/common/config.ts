import dotenv from 'dotenv';
import { join } from 'path';

dotenv.config({
  path: join(__dirname, '../../.env')
});

export const {
  PORT,
  NODE_ENV,
  MONGO_CONNECTION_STRING,
  JWT_SECRET_KEY,
  AUTH_MODE,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_HOST
} = process.env;

export const config = {
  NODE_ENV,
  PORT: PORT ?? 4000,
  MONGO_CONNECTION_STRING,
  JWT_SECRET_KEY: JWT_SECRET_KEY ?? 'secret-key',
  AUTH_MODE: AUTH_MODE ?? 'true',
  POSTGRES_PORT: POSTGRES_PORT ?? 5432,
  POSTGRES_USER: POSTGRES_USER ?? 'postgres' ,
  POSTGRES_PASSWORD: POSTGRES_PASSWORD ?? 'postgres' ,
  POSTGRES_DB: POSTGRES_DB ?? 'postgres' ,
  POSTGRES_HOST: POSTGRES_HOST ?? 'postgres' ,
};
