"use server";

import { BASE_URL } from "@/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// export async function login(username, password) {
//   const res = await fetch("https://dummyjson.com/auth/login", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       username,
//       password,
//     }),
//   });
//   const user = await res.json();

//   if (user.token) {
//     const cookieStory = cookies();
//     cookieStory.set("user", JSON.stringify(user));

//     redirect("/");
//   }
// }

export async function login(formData) {
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: formData.get("username"),
      password: formData.get("password"),
    }),
  });
  const user = await res.json();

  if (user.token) {
    const cookieStory = cookies();
    cookieStory.set("user", JSON.stringify(user));

    redirect("/");
  }
}

export async function logout() {
  const cookieStory = cookies();
  cookieStory.delete("user");
  redirect("login");
}
