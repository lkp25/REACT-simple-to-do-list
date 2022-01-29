import { useState, useRef, useEffect } from "react";
import React from "react";
import * as uuid from "uuid";
import RecipeList from "./components/RecipeList";

function App() {
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
  return (
    <>
      <RecipeList recipes={sampleRecipes}> </RecipeList>
    </>
  );
}

export default App;
