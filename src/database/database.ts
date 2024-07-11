import "dotenv/config";

import { createPool } from "mysql2";

const databaseConfig = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

export const database = createPool(databaseConfig).promise();
