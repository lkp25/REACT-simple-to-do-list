import React, { useContext } from "react";
import IngredientsList from "./IngredientsList";
import { recipeContext } from "../App";

export default function Recipe({
  id,
  name,
  cooktime,
  servings,
  instructions,
  ingredients,
}) {
  // DONT FORGET this for contextAPI to work!!!
  const { handleRecipeDelete, handleRecipeSelect } = useContext(recipeContext);

  return (
    <div className="recipe">
      <div className="recipe__header ">
        <h3 className="recipe__title">{name}</h3>
        <div>
          <button
            onClick={() => {
              handleRecipeSelect(id);
            }}
            className="btn btn--primary mr-1 "
          >
            EDIT
          </button>
          <button
            onClick={() => {
              handleRecipeDelete(id);
            }}
            className="btn btn--danger"
          >
            delete
          </button>
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Cook time:</span>
        <span className="recipe__value">{cooktime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Servings:</span>
        <span className="recipe__value">{servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Instructions:</span>
        <div className="recipe__value">{instructions}</div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Ingredients:</span>
        <div className="recipe__value">
          <IngredientsList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
}
