import { users } from '@/db/schema';
import { drizzle } from 'drizzle-orm/postgres-js';
import { NextResponse } from 'next/server';
import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL;
const client = postgres(connectionString!, { max: 1 });
const db = drizzle(client);

export async function GET() {
	const allUsers = await db.select().from(users);
	return NextResponse.json({ response: allUsers });
}

export async function POST(request: Request) {
	try {
		const body = await request.json();
		return NextResponse.json({ response: body });
	} catch (err) {
		const body = err;
		return NextResponse.json({ response: body });
	}

	// const allUsers = await db.insert(users).values(newUser);
}
