import { useState, useRef, useEffect } from "react";

import React from "react";
import * as uuid from "uuid";
import RecipeList from "./components/RecipeList";
import "./css/App.css";
import RecipeEdit from "./components/Recipe-edit";

export const recipeContext = React.createContext();

const LOCAL_STORAGE_KEY = "RECIPES";

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

function App() {
  const conditionalRenderingTest = true;
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(sampleRecipes);

  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );
  //LOAD - always load first, save later!
  useEffect(() => {
    const getRecipes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (getRecipes) setRecipes(getRecipes);
  }, []);

  //SAVE
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const handleRecipeAdd = () => {
    const newRecipe = {
      id: uuid.v4(),
      name: "",
      servings: "",
      cooktime: "",
      instructions: "",
      ingredients: [],
    };

    //USE SETTing state as a function!!!
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
    setSelectedRecipeId(newRecipe.id);
  };

  const handleRecipeDelete = (id) => {
    if (selectedRecipeId != null && selectedRecipeId == id) {
      setSelectedRecipeId(undefined);
    }
    const newRecipeList = recipes.filter((rec) => rec.id !== id);
    setRecipes(newRecipeList);
  };
  function handleRecipeSelect(id) {
    setSelectedRecipeId(id);
  }
  // allow changing the input fields and instantly reflect changes from edition in the recipe list
  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex((r) => r.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
  };

  return (
    <>
      {/* HELLO FROM CONDITIONAL RENDERING */}
      {conditionalRenderingTest && <p>dssdsdsdsdfsdfsgfds</p>}
      <recipeContext.Provider value={recipeContextValue}>
        <RecipeList recipes={recipes} />
        {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
      </recipeContext.Provider>
    </>
  );
}

export default App;
