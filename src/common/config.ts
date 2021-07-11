import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});
const { PORT } = process.env;
const { NODE_ENV } = process.env;
const { MONGO_CONNECTION_STRING } = process.env;
const { JWT_SECRET_KEY } = process.env;
const { AUTH_MODE } = process.env;
const { POSTGRES_HOST } = process.env;
const { POSTGRES_PORT } = process.env;
const { POSTGRES_PASSWORD } = process.env;
const { POSTGRES_USER } = process.env;
const { POSTGRES_DB } = process.env;
const { USE_FASTIFY } = process.env;
console.log(process.env.JWT_SECRET_KEY);
const EXCLUDE_ROUTES = ['/doc', '/', '/login'];

export {
  PORT,
  NODE_ENV,
  MONGO_CONNECTION_STRING,
  JWT_SECRET_KEY,
  AUTH_MODE,
  EXCLUDE_ROUTES,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_PASSWORD,
  POSTGRES_USER,
  POSTGRES_DB,
  USE_FASTIFY,
};
