import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/postgres-js';
import { NextResponse } from 'next/server';
import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL;
const client = postgres(connectionString!, { max: 1 });
const db = drizzle(client);

export async function GET(request: Request, { params }: { params: any }) {
	const allUsers = await db.select().from(users).where(eq(users.email, params.email));
	return NextResponse.json({ response: allUsers[0] });
}
