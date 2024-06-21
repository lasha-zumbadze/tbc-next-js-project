import { BASE_URL } from "@/api";

export async function updateBlog(title, blog, blogImg, id) {
  const userData = {
    title: title,
    blog: blog,
    imgUrl: blogImg,
    id: id,
  };

  await fetch(`${BASE_URL}/api/update-blog`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
}
