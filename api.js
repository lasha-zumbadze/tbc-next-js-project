export const BASE_URL = "http://localhost:3000";

export async function getUsers() {
  const res = await fetch(BASE_URL + "/api/get-users");
  const { users } = await res.json();

  return users.rows;
}

export async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
}

export async function getBlogs() {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();
  return data.posts;
}
