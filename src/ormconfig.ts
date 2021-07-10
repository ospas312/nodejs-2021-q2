import { ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { join } from 'path';
import { User } from 'src/entities/user.entity';
import { Board } from 'src/entities/board.entity';
import { Task } from 'src/entities/task.entity';
import { Columns } from 'src/entities/column.entity';
import { CreateTasksTable1624210582789 } from './migrations/1624210582789-CreateTasksTable';
import { CreateUsersTable1624210619963 } from './migrations/1624210619963-CreateUsersTable';
import { CreateBoardsTable1624210627025 } from './migrations/1624210627025-CreateBoardsTable';

dotenv.config({
  path: join(__dirname, '../../.env'),
});

const { POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB } =
  process.env;

console.log('orm_user', process.env.POSTGRES_USER);
console.log('orm_user', POSTGRES_USER);
export const ormConfig = {
  type: 'postgres',
  host: 'host.docker.internal',
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  synchronize: false,
  migrationsRun: true,
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectionInterval: 1000,
  entities: [User, Board, Task, Columns],

  migrationsTableName: 'migrations',
  migrations: [
    CreateTasksTable1624210582789,
    CreateUsersTable1624210619963,
    CreateBoardsTable1624210627025,
  ],
  cli: { migrationsDir: 'src/migrations' },

  seeds: [join(__dirname, '../../database/seeds/*.ts')],
  factories: [join(__dirname, '../../database/factories/*.ts')],
} as ConnectionOptions;
