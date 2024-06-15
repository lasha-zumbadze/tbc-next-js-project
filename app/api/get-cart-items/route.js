import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
  const user = await getSession();

  if (!user) return NextResponse.json([]);

  const data = await sql`SELECT user_id FROM shopping;`;
  const currUser = data.rows.find((el) => el.user_id === user.user.sub);

  try {
    const carts = currUser
      ? await sql`SELECT cartItems FROM shopping WHERE user_id = ${currUser.user_id};`
      : [];

    return NextResponse.json(
      { carts },
      {
        status: 200,
        headers: { "Cache-Control": "no-cache, no-store, must-revalidate" },
      }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
