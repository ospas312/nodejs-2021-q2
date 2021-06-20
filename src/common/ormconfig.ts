import { ConnectionOptions } from 'typeorm';

const { POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB } = process.env;
export const config = {
   type: "postgres",
   host: POSTGRES_HOST,
   port: POSTGRES_PORT,
   username: POSTGRES_USER,
   password: POSTGRES_PASSWORD,
   database: POSTGRES_DB,
   synchronize: true,
   autoReconnect: true,
   reconnectTries: Number.MAX_VALUE,
   reconnectionInterval: 1000,
} as ConnectionOptions;