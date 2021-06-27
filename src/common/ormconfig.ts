import { ConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

const { POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB } = process.env;

export default {
   type: "postgres",
   host: "host.docker.internal",
   port: POSTGRES_PORT,
   username: POSTGRES_USER,
   password: POSTGRES_PASSWORD,
   database: POSTGRES_DB,
   synchronize: false,
   autoReconnect: true,
   migrationsRun: true,
   reconnectTries: Number.MAX_VALUE,
   reconnectionInterval: 1000,
   entities: [path.join(__dirname, '../entitys/*.entity.ts')],

   migrationsTableName: 'migrations',
   migrations: [path.join(__dirname, '../migrations/*.ts')],
   cli: { migrationsDir: 'src/migrations' },

   seeds: [path.join(__dirname, '../../database/seeds/*.ts')],
   factories: [path.join(__dirname, '../../database/factories/*.ts')],
} as ConnectionOptions;
