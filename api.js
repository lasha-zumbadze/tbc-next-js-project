export const BASE_URL = "http://localhost:3000";

export async function getUsers() {
  const res = await fetch(BASE_URL + "/api/get-users");
  const { users } = await res.json();

  return users.rows;
}
