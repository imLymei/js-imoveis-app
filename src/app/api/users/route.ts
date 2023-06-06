import { users } from '@/db/schema';
import { drizzle } from 'drizzle-orm/postgres-js';
import { NextResponse } from 'next/server';
import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL;
const client = postgres(connectionString!, { max: 1 });
const db = drizzle(client);

// TODO: MOVER API PARA OUTRO PROJETO PQ EXPORT NAO FUNCIONA HAHAHAHAHAHAHAHAAHAHAHAHAHAHA

export async function GET() {
	const allUsers = await db.select().from(users);
	return NextResponse.json({ response: allUsers });
}

export async function POST(request: Request) {
	const body = await request.json();

	console.log(request);

	// const allUsers = await db.insert(users).values(newUser);
	return NextResponse.json({ response: body });
}
