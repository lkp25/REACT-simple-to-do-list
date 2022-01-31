import React from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";

export default function RecipeEdit({ recipe }) {
  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button className="btn btn--danger">&times;</button>
      </div>
      <div className="recipe-edit__details-grid">
        <label className="recipe-edit__label" htmlFor="name">
          Name
        </label>
        <input
          className="recipe-edit__input"
          type="text"
          id="name"
          name="name"
          value={recipe.name}
        />
        <label className="recipe-edit__label" htmlFor="cooktime">
          cooktime
        </label>
        <input
          className="recipe-edit__input"
          type="text"
          id="cooktime"
          value={recipe.cooktime}
          name="cooktime"
        />
        <label className="recipe-edit__label" htmlFor="servings">
          servings
        </label>
        <input
          className="recipe-edit__input"
          type="number"
          id="servings"
          name="servings"
          value={recipe.servings}
        />

        <label className="recipe-edit__label" htmlFor="instructions ">
          instructions
        </label>
        <textarea
          className="recipe-edit__input"
          name="instructions"
          id="instructions"
          value={recipe.instructions}
        ></textarea>
      </div>

      <br />
      <label className="recipe-edit__label" htmlFor="ingredients">
        ingredients
      </label>
      <div className="recipe-edit__ingredient-grid ">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map((ingredient) => {
          return <RecipeIngredientEdit ingredient={ingredient} />;
        })}
      </div>
      <div className="recipe-edit__add-ingredient-button-container">
        <button className="btn btn--primary ">Add Ingredient</button>
      </div>
    </div>
  );
}
