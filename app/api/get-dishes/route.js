import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
  try {
    const dishes = await sql`SELECT * FROM dishes;`;

    return NextResponse.json(
      { dishes },
      {
        status: 200,
        headers: { "Cache-Control": "no-cache, no-store, must-revalidate" },
      }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
