import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function DELETE(_request, { params }) {
  const { id } = params;

  await sql`DELETE FROM blogs WHERE id = ${Number(id)};`;

  const blogs = await sql`SELECT * FROM blogs;`;

  return NextResponse.json(
    { blogs },
    {
      status: 200,
    }
  );
}
