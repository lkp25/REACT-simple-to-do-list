import React from "react";
import Recipe from "./Recipe";

export default function RecipeList({ recipes }) {
  return (
    //USE THE SPREAD to pass each key-value as a separate prop!
    <>
      {recipes.map((rec) => {
        return <Recipe key={rec.id} {...rec} />;
      })}
    </>
  );
}
