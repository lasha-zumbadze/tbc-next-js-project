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

// LOGIN & LOGOUT ACTIONS
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

// ADMIN ACTIONS
export async function createUser(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const age = formData.get("age");

  const userData = {
    name,
    email,
    age,
  };

  await fetch(`${BASE_URL}/api/create-user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
}

export async function deleteUser(id) {
  await fetch(`${BASE_URL}/api/delete-user/${id}`, {
    method: "DELETE",
  });
}

export async function editUser(id) {
  const name = formData.get("name");
  const email = formData.get("email");
  const age = formData.get("age");

  const userData = {
    name,
    email,
    age,
  };

  await fetch(`${BASE_URL}/api/update-user/${id}`, {
    method: "PATCH",
    body: JSON.stringify(userData),
  });
}
