import React, { useContext } from "react";
import Todo from "./Todo";
import { ThemeContext } from "./App";

export default function TodoList({ todos, toggleTodo, handleDeleteTodo }) {
  //set var fetching context object to consume
  const style = useContext(ThemeContext);

  // add key so that react only rerenders components that change
  return todos.map((todo) => (
    <>
      <Todo
        handleDeleteTodo={handleDeleteTodo}
        toggleTodo={toggleTodo}
        key={todo.id}
        todo={todo}
      ></Todo>
      <div style={style}>
        I am consuming theme from context API - ThemeContext
      </div>
    </>
  ));
}
