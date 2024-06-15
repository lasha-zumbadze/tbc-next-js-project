import { BASE_URL } from "@/api";

export async function createDish(
  title,
  price,
  category,
  description,
  ingredients,
  imgUrl
) {
  const userData = {
    title: title,
    price: price,
    category: category,
    description: description,
    ingredients: ingredients,
    imgUrl: imgUrl,
  };

  await fetch(`${BASE_URL}/api/create-dish`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
}
