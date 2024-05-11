import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  const body = await request.json();
  const { name, email, age } = body;

  // const id = request.nextUrl.pathname.replace("/api/update-user/", "");

  // const { name, email, age } = await request.json();

  // try {
  //   if (!id) throw new Error("ID is required");
  //   await sql`UPDATE users SET name = ${name}, email = ${email}, age = ${age} WHERE id = ${id};`;
  // } catch (error) {
  //   return NextResponse.json({ error }, { status: 500 });
  // }

  // const users = await sql`SELECT * FROM users;`;

  // return NextResponse.json(
  //   { users },
  //   {
  //     status: 200,
  //   }
  // );
}
