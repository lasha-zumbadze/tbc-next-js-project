import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, blog, imgUrl } = await request.json();

  await sql`INSERT INTO blogs (title, blog, imgUrl) VALUES (${title}, ${blog}, ${imgUrl});`;

  const blogs = await sql`SELECT * FROM blogs;`;
  return NextResponse.json({ blogs }, { status: 200 });
}
