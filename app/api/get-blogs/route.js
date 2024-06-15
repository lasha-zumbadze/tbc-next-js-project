import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
  try {
    const blogs = await sql`SELECT * FROM blogs;`;

    return NextResponse.json(
      { blogs },
      {
        status: 200,
        headers: { "Cache-Control": "no-cache, no-store, must-revalidate" },
      }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
