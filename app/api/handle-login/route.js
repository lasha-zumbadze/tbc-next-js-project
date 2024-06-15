import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

export const GET = async () => {
  const { user } = await getSession();

  // let user_id, name, email;

  // if (user) {
  //   user_id = user.sub;
  //   name = user.name;
  //   email = user.email;
  // }

  try {
    await sql`
  INSERT INTO users1 (user_id, name, email)
  VALUES (${user?.sub}, ${user?.name}, ${user?.email});
`;
  } catch (error) {
    console.error("Error inserting user:", error);
  }

  return redirect("/profile");
};
