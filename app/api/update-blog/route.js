import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const { title, blog, imgUrl, id } = await request.json();

  await sql`UPDATE blogs SET title = ${title}, blog = ${blog}, imgUrl = ${imgUrl} WHERE id = ${Number(
    id
  )};`;

  const blogs = await sql`SELECT * FROM blogs;`;
  return NextResponse.json({ blogs }, { status: 200 });
}
