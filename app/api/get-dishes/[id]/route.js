import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(request, { params }) {
  const { id } = params;
  try {
    const data = await sql`SELECT * FROM dishes WHERE id=${id};`;

    const [dish] = data.rows;

    return NextResponse.json(dish, {
      status: 200,
      headers: { "Cache-Control": "no-cache, no-store, must-revalidate" },
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
