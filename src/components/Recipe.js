import React from "react";
import IngredientsList from "./IngredientsList";

export default function Recipe({
  name,
  cooktime,
  servings,
  instructions,
  ingredients,
}) {
  return (
    <>
      <div>
        <h3>{name}</h3>
        <div>
          <button>edit</button>
          <button>delete\</button>
        </div>
      </div>
      <div>
        <span>Cook time:</span>
        <span>{cooktime}</span>
      </div>
      <div>
        <span>Servings:</span>
        <span>{servings}</span>
      </div>
      <div>
        <span>Instructions:</span>
        <div>{instructions}</div>
      </div>
      <div>
        <span>Ingredients:</span>
        <div>
          <IngredientsList ingredients={ingredients} />
        </div>
      </div>
    </>
  );
}
