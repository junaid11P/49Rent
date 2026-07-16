import { NextResponse } from 'next/server';
import { getUsersCollection } from '@/lib/mongodb';

export async function GET() {
  try {
    const usersCollection = await getUsersCollection();
    const users = await usersCollection.find({}).limit(20).toArray();
    return NextResponse.json({ ok: true, users });
  } catch (error) {
    return NextResponse.json({ ok: false, error: (error as Error).message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const usersCollection = await getUsersCollection();
    const result = await usersCollection.insertOne({
      ...body,
      createdAt: new Date(),
    });
    return NextResponse.json({ ok: true, insertedId: result.insertedId });
  } catch (error) {
    return NextResponse.json({ ok: false, error: (error as Error).message }, { status: 500 });
  }
}
