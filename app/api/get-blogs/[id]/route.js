import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(request, { params }) {
  const { id } = params;
  try {
    const data = await sql`SELECT * FROM blogs WHERE id=${id};`;

    const [blog] = data.rows;

    return NextResponse.json(blog, {
      status: 200,
      headers: { "Cache-Control": "no-cache, no-store, must-revalidate" },
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
