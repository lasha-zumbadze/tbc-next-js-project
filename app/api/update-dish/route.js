import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const { title, price, category, description, ingredients, imgUrl, id } =
    await request.json();

  await sql`UPDATE dishes SET title = ${title}, price = ${Number(
    price
  )}, category = ${category}, description = ${description}, ingredients = ${ingredients}, imgUrl = ${imgUrl} WHERE id = ${Number(
    id
  )};`;

  const dishes = await sql`SELECT * FROM dishes;`;
  return NextResponse.json({ dishes }, { status: 200 });
}
