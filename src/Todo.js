import React from "react";

export default function Todo({ todo, toggleTodo, handleDeleteTodo }) {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  const deleteTodo = () => {
    handleDeleteTodo(todo.id);
  };

  return (
    <div>
      <label>
        <input
          onChange={handleTodoClick}
          type="checkbox"
          checked={todo.completed}
        />
        {todo.name}
      </label>
      <button onClick={deleteTodo}>X</button>
    </div>
  );
}
