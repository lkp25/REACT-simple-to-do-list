import { useState, useRef, useEffect } from "react";

import React from "react";
import * as uuid from "uuid";
import RecipeList from "./components/RecipeList";
import "./css/App.css";

function App() {
  const conditionalRenderingTest = true;

  const sampleRecipes = [
    {
      id: 1,
      name: "chicken",
      servings: 3,
      cooktime: "1:45",
      instructions: "1.do this \n 2.And that \n 3. and add smore",
      ingredients: [{ id: 1, name: "chicken", amount: "2pounds" }],
    },
    {
      id: 2,
      name: "prawn coctail",
      servings: 2,
      cooktime: "2:45",
      instructions: "1.do this \n 2.And that \n 3. and add smore",
      ingredients: [
        { id: 1, name: "chicken", amount: "2pounds" },
        { id: 2, name: "salt ", amount: "22 grains" },
      ],
    },
  ];

  const [recipes, setRecipes] = useState(sampleRecipes);

  const handleRecipeAdd = () => {
    const newRecipe = {
      id: uuid.v4(),
      name: "whatevs",
      servings: 3,
      cooktime: "4:50",
      instructions: "dsfgfgdfgfd",
      ingredients: [
        { id: 1, name: "costam", amount: 1000 },
        { id: 2, name: "costam", amount: 102200 },
      ],
    };
    console.log(newRecipe);
    setRecipes([...recipes, newRecipe]);
    console.log(recipes);
  };

  const handleRecipeDelete = (id) => {
    const newRecipeList = recipes.filter((rec) => rec.id !== id);
    setRecipes(newRecipeList);
  };

  return (
    <>
      {/* HELLO FROM CONDITIONAL RENDERING */}
      {conditionalRenderingTest && <p>dssdsdsdsdfsdfsgfds</p>}
      <RecipeList
        recipes={recipes}
        handleRecipeDelete={handleRecipeDelete}
        handleRecipeAdd={handleRecipeAdd}
      />
    </>
  );
}

export default App;
