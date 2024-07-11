import "dotenv/config";
import { createPool } from "mysql2";

import logger from "../config/logger";

const databaseConfig = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const database = createPool(databaseConfig).promise();

(async function up() {
  try {
    logger.info(`Creating database ${process.env.DB_NAME}`);

    await database.query(`
      CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME};
    `);

    await database.query(`
      USE ${process.env.DB_NAME};
    `);

    logger.info(`Creating users table`);
    await database.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phonenumber VARCHAR(255) NOT NULL
      );
    `);

    process.exit(0);
  } catch (error) {
    logger.error(`Error creating and configurating database`, error);

    process.exit(1);
  } finally {
    await database.end();
  }
})();
