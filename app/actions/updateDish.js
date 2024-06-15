import { BASE_URL } from "@/api";

export async function updateDish(
  title,
  price,
  category,
  description,
  ingredients,
  dishImg,
  id
) {
  const userData = {
    title: title,
    price: price,
    category: category,
    description: description,
    ingredients: ingredients,
    imgUrl: dishImg,
    id: id,
  };

  await fetch(`${BASE_URL}/api/update-dish`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
}
