import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { name, email, age } = await request.json();
  const id = params.id;

  await sql`UPDATE users SET name = ${name}, email = ${email}, age = ${age} WHERE id = ${Number(
    id
  )};`;

  const users = await sql`SELECT * FROM users;`;

  return NextResponse.json(
    { users },
    {
      status: 200,
    }
  );
}
