import { drizzle } from 'drizzle-orm/node-postgres';
import { client } from './client';
import * as schema from "@/drizzle/schema";

export const db = drizzle(client, { schema });
