import { BASE_URL } from "@/api";

export async function deleteBlog(id) {
  await fetch(`${BASE_URL}/api/delete-blog/${id}`, {
    method: "DELETE",
  });
}
