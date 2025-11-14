// src/app/api/server/route.ts
import { NextRequest, NextResponse } from 'next/server';

let messages: string[] = [];

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const message = body?.message;

  if (typeof message === 'string' && message.trim() !== '') {
    messages.push(message);
    if (messages.length > 50) messages.shift();
    return NextResponse.json({ status: 'Message received' }, { status: 201 });
  }

  return NextResponse.json({ error: 'Invalid message' }, { status: 400 });
}

export async function GET(_req: NextRequest) {
  return NextResponse.json(messages, { status: 200 });
}
