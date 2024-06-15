import { BASE_URL } from "@/api";

export async function deleteDish(id) {
  await fetch(`${BASE_URL}/api/delete-dish/${id}`, {
    method: "DELETE",
  });
}
