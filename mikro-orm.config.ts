import { MikroORMOptions, Options } from '@mikro-orm/core';
import { Task } from './src/tasks/task.entity';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

const config: Options = {
  entities: [Task],
  dbName: 'neondb',
  driver: PostgreSqlDriver,
  clientUrl: 'postgresql://neondb_owner:Q5b9TVHtUyhM@ep-delicate-unit-a5lr9xwe.us-east-2.aws.neon.tech/neondb?sslmode=require',
  debug: true,
  driverOptions:{
    connection: {
      ssl: {
        rejectUnauthorized: false, // Accept self-signed certificates
      },
    },
  },
  migrations: {
    path: './migrations',
    glob: '!(*.d).{js,ts}',
  },
};

export default config;
