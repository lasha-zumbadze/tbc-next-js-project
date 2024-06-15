import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function DELETE(_request, { params }) {
  const { id } = params;

  await sql`DELETE FROM dishes WHERE id = ${Number(id)};`;

  const dishes = await sql`SELECT * FROM dishes;`;

  return NextResponse.json(
    { dishes },
    {
      status: 200,
    }
  );
}
