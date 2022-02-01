import React from "react";

export default function RecipeIngredientEdit({
  ingredient,
  handleIngredientChange,
  handleIngredientDelete,
}) {
  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }
  return (
    <>
      <input
        value={ingredient.name}
        className="recipe-edit__input"
        onChange={(e) => {
          handleChange({ name: e.target.value });
        }}
        type="text"
      />
      <input
        value={ingredient.amount}
        className="recipe-edit__input"
        type="number "
        onChange={(e) => {
          handleChange({ amount: parseInt(e.target.value) });
        }}
      />
      <button
        onClick={() => {
          handleIngredientDelete(ingredient.id);
        }}
        className="btn btn--danger"
      >
        &times;
      </button>
    </>
  );
}
