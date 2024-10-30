import "dotenv/config";
// highlight-next-line
import { Pool } from "pg";

export const client = new Pool({
	host: process.env.DB_HOST,
	port: parseInt(process.env.DB_PORT_NO as string),
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
});
