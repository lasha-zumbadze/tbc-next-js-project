import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, price, category, description, ingredients, imgUrl } =
    await request.json();

  await sql`INSERT INTO dishes (title, price, category, description, ingredients, imgUrl) VALUES (${title}, ${Number(
    price
  )}, ${category}, ${description}, ${ingredients}, ${imgUrl});`;

  const dishes = await sql`SELECT * FROM dishes;`;
  return NextResponse.json({ dishes }, { status: 200 });
}
