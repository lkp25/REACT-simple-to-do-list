import React, { useContext } from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import { recipeContext } from "../App";
import * as uuid from "uuid";

export default function RecipeEdit({ recipe, closeEditComponent }) {
  const { handleRecipeChange, handleRecipeSelect } = useContext(recipeContext);

  function handleIngredientChange(id, ingredient) {
    const newIngredients = [...recipe.ingredients];
    const index = newIngredients.findIndex((r) => r.id === id);
    newIngredients[index] = ingredient;
    handleChanges({ ingredients: newIngredients });
  }

  function handleIngredientAdd() {
    const newIngredient = {
      id: uuid.v4(),
      name: "",
      amount: "",
    };
    handleChanges({ ingredients: [...recipe.ingredients, newIngredient] });
  }
  function handleIngredientDelete(id) {
    const currentIngredients = recipe.ingredients.filter(
      (ing) => ing.id !== id
    );
    handleChanges({ ingredients: currentIngredients });
  }

  function handleChanges(changes) {
    //overwrite current recipe with the changes from inputs
    handleRecipeChange(recipe.id, { ...recipe, ...changes });
  }
  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button
          onClick={() => {
            handleRecipeSelect(undefined);
          }}
          className="btn btn--danger"
        >
          &times;
        </button>
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
          onChange={(e) => {
            handleChanges({ name: e.target.value });
          }}
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
          onChange={(e) => {
            handleChanges({ cooktime: e.target.value });
          }}
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
          onChange={(e) => {
            handleChanges({ servings: parseInt(e.target.value) || "" });
          }}
        />

        <label className="recipe-edit__label" htmlFor="instructions ">
          instructions
        </label>
        <textarea
          className="recipe-edit__input"
          name="instructions"
          id="instructions"
          value={recipe.instructions}
          onChange={(e) => {
            handleChanges({ instructions: e.target.value });
          }}
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
          return (
            <RecipeIngredientEdit
              handleIngredientDelete={handleIngredientDelete}
              handleIngredientChange={handleIngredientChange}
              key={ingredient.id}
              ingredient={ingredient}
            />
          );
        })}
      </div>
      <div className="recipe-edit__add-ingredient-button-container">
        <button
          onClick={() => {
            handleIngredientAdd();
          }}
          className="btn btn--primary "
        >
          Add Ingredient
        </button>
      </div>
    </div>
  );
}
