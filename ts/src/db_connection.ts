import * as _ from 'lodash';
import { Connection, createConnection } from 'typeorm';

let connectionIfExists: Connection | undefined;

/**
 * Returns the DB connnection
 */
export function getDBConnection(): Connection {
    if (_.isUndefined(connectionIfExists)) {
        throw new Error('DB connection not initialized');
    }
    return connectionIfExists;
}

/**
 * Creates the DB connnection to use in an app
 */
export async function initDBConnectionAsync(): Promise<void> {
    if (!_.isUndefined(connectionIfExists)) {
        throw new Error('DB connection already exists');
    }
    connectionIfExists = await createConnection({
      url: process.env.DATABASE_URL,
      type: 'postgres',
      synchronize: true,
      logging: true,
      entities: ["ts/lib/entity/**/*.js", "js/entity/**/*.js"],
      cli: {
          "entitiesDir": "ts/lib/entity"
      },
      extra: {
        ssl: true,
      }
    });
}
