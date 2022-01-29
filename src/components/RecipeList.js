import React from "react";
import Recipe from "./Recipe";

export default function RecipeList({
  recipes,
  handleRecipeAdd,
  handleRecipeDelete,
}) {
  return (
    //USE THE SPREAD to pass each key-value as a separate prop!
    <>
      <div className="recipe-list ">
        <div>
          {recipes.map((rec) => {
            return (
              <Recipe
                key={rec.id}
                {...rec}
                handleRecipeDelete={handleRecipeDelete}
              />
            );
          })}
        </div>
        <div className="recipe-list__add-recipe-button-container">
          <button onClick={handleRecipeAdd} className="btn btn--primary">
            add recipe
          </button>
        </div>
      </div>
    </>
  );
}
