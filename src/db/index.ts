import * as schema from './schema';
import { env } from '@/env/server.mjs';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

export const connectionString = env.DATABASE_URL;
const client = postgres(connectionString);

export const db = drizzle(client, { schema });
