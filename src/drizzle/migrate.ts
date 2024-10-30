import { drizzle } from "drizzle-orm/node-postgres";
// highlight-next-line
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { client } from "@/drizzle/client";

async function runMigrations() {
	// highlight-next-line
	await migrate(drizzle(client), {
		migrationsFolder: "./src/drizzle/migrations",
	});
    
	await client.end();
};

runMigrations();
