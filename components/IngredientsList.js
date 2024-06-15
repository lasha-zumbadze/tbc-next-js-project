"use client";

import React, { useState } from "react";

function IngredientsList({ ingredients, setIngredients }) {
  const [ingredient, setIngredient] = useState("");

  const handleAddIngredient = (e) => {
    e.preventDefault();
    if (ingredient) {
      setIngredients([...ingredients, ingredient]);
      setIngredient("");
    }
  };

  const handleRemoveIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col space-y-4">
      <p className="text-lg text-[#c8a97e]">Ingredients</p>
      <form className="flex space-x-2">
        <input
          type="text"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          placeholder="Add ingredient"
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c8a97e]"
        />
        <button
          type="button"
          onClick={handleAddIngredient}
          className="bg-[#c8a97e] text-white py-2 px-4 rounded-md hover:bg-[#a88662]"
        >
          Add
        </button>
      </form>
      <ul className="list-disc pl-5">
        {ingredients.map((item, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{item}</span>
            <button
              type="button"
              onClick={() => handleRemoveIngredient(index)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <input
        type="hidden"
        name="ingredients"
        value={JSON.stringify(ingredients)}
      />
    </div>
  );
}

export default IngredientsList;
