import React, { useContext } from "react";
import Recipe from "./Recipe";
import { recipeContext } from "../App";

export default function RecipeList({ recipes }) {
  const value = useContext(recipeContext);

  return (
    //USE THE SPREAD to pass each key-value as a separate prop!
    <>
      <div className="recipe-list ">
        <div>
          {recipes.map((rec) => {
            return <Recipe key={rec.id} {...rec} />;
          })}
        </div>
        <div className="recipe-list__add-recipe-button-container">
          <button onClick={value.handleRecipeAdd} className="btn btn--primary">
            add recipe
          </button>
        </div>
      </div>
    </>
  );
}
