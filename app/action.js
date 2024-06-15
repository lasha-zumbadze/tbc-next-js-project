"use server";

import { BASE_URL, getImagesBlobs } from "@/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { put } from "@vercel/blob";

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
    cookieStory.set("user", JSON.stringify(user.token));

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
    name: name,
    email: email,
    age: age,
  };

  if (name !== "" && email !== "" && age !== "") {
    await fetch(`${BASE_URL}/api/create-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    revalidatePath("/admin");
    redirect("/admin");
  } else {
    redirect("/admin");
  }
}

export async function deleteUser(id) {
  await fetch(`${BASE_URL}/api/delete-user/${id}`, {
    method: "DELETE",
  });
  revalidatePath("/admin");
  redirect("/admin");
}

export async function updateUser(id, name, email, age) {
  // const name = formData.get("name");
  // const email = formData.get("email");
  // const age = formData.get("age");

  const userData = {
    name,
    email,
    age,
  };

  await fetch(`${BASE_URL}/api/update-user/${id}`, {
    method: "PUT",
    body: JSON.stringify(userData),
  });
  revalidatePath("/admin");
  redirect("/admin");
}

// *********************************

// UPLOAD ACTIONS
// export async function uploadBlogImage(formData) {
//   const imageFile = formData.get("image");
//   const folderPath = "blogs";
//   const filePath = `${folderPath}/${imageFile.name}`;
//   const blob = await put(filePath, imageFile, {
//     access: "public",
//   });
//   revalidatePath("/upload");
//   return blob;
// }

// export async function uploadMealImage(formData) {
//   const imageFile = formData.get("image");
//   const folderPath = "meals";
//   const filePath = `${folderPath}/${imageFile.name}`;
//   const blob = await put(filePath, imageFile, {
//     access: "public",
//   });

//   revalidatePath("/admin/add-meal");
//   return blob;
// }

// export async function uploadUserImage(formData) {
//   const imageFile = formData.get("image");
//   const folderPath = "users";
//   const filePath = `${folderPath}/${imageFile.name}`;
//   const blob = await put(filePath, imageFile, {
//     access: "public",
//   });
//   revalidatePath("/upload");
//   return blob;
// }

// *************************

// export async function createMeal(formData) {
//   const title = formData.get("title");
//   const price = formData.get("price");

//   const imgBlob = await getImagesBlobs();
//   const img = imgBlob.filter((blob) => blob.pathname.includes("meals"));

//   console.log(img);
//   const imgUrl = img[1].url;

//   const userData = {
//     title: title,
//     price: price,
//     imgUrl: imgUrl,
//   };

//   await fetch(`${BASE_URL}/api/create-meal`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(userData),
//   });
// }
