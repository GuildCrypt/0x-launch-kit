"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const typeorm_1 = require("typeorm");
let connectionIfExists;
/**
 * Returns the DB connnection
 */
function getDBConnection() {
    if (_.isUndefined(connectionIfExists)) {
        throw new Error('DB connection not initialized');
    }
    return connectionIfExists;
}
exports.getDBConnection = getDBConnection;
/**
 * Creates the DB connnection to use in an app
 */
async function initDBConnectionAsync() {
    if (!_.isUndefined(connectionIfExists)) {
        throw new Error('DB connection already exists');
    }
    connectionIfExists = await typeorm_1.createConnection({
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
exports.initDBConnectionAsync = initDBConnectionAsync;
