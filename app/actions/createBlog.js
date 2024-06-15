import { BASE_URL } from "@/api";

export async function createBlog(title, blog, imgUrl) {
  const userData = {
    title: title,
    blog: blog,
    imgUrl: imgUrl,
  };

  await fetch(`${BASE_URL}/api/create-blog`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
}
