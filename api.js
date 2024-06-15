import { list } from "@vercel/blob";

export const BASE_URL = "http://localhost:3000";

export async function getUsers() {
  const res = await fetch(BASE_URL + "/api/get-users");
  const { users } = await res.json();

  return users.rows;
}

// ******************************

export async function getImagesBlobs() {
  const response = await list();
  return response.blobs;
}
