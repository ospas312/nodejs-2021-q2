import { ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config({
  path: join(__dirname, '../.env'),
});

const {
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_HOST,
} = process.env;

export default {
  type: 'postgres',
  host: POSTGRES_HOST,
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  synchronize: false,
  migrationsRun: true,
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectionInterval: 1000,
  entities: [join(__dirname, 'entities/*{.ts,.js}')],
  migrationsTableName: 'migrations',
  migrations: [join(__dirname, 'migrations/*{.ts,.js}')],
  cli: { migrationsDir: 'src/migrations', entitiesDir: 'src/entities' },
  seeds: [join(__dirname, '../database/seeds/*{.ts,.js}')],
  factories: [join(__dirname, '../database/factories/*{.ts,.js}')],
} as ConnectionOptions;
