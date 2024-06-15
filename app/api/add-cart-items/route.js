import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { user } = await getSession();
  const { cartItems } = await request.json();

  try {
    await sql`
      INSERT INTO shopping (user_id, cartItems)
      VALUES (${user?.sub}, ${JSON.stringify(cartItems)}::jsonb)
      ON CONFLICT (user_id)
      DO UPDATE SET cartItems = EXCLUDED.cartItems;
    `;
  } catch (error) {
    console.error("Error inserting user:", error);
  }

  const cart = await sql`SELECT * FROM shopping;`;
  return NextResponse.json({ cart }, { status: 200 });
};
