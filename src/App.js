import { useState, useRef, useEffect } from "react";
import React from "react";
import TodoList from "./TodoList";
import * as uuid from "uuid";

export const ThemeContext = React.createContext();

function App() {
  //initialize contextAPI theme variable
  const [theme, setTheme] = useState("red");

  // initialize the todos
  const [todos, setTodos] = useState([]);
  const LOCAL_STORAGE_KEY = "todos";

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]); //on evry change in todos array

  const todoNameRef = useRef();

  //passed down to todolist to manipulate complete flag
  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleDeleteTodo = (id) => {
    const refreshedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(refreshedTodos);
  };

  const handleClearTodos = () => {
    setTodos([]);
  };

  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value;
    if (!name) return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuid.v4(), name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };

  return (
    //ALL APP has access toThemeContext.Provider!
    <>
      <ThemeContext.Provider value={{ backgroundColor: theme }}>
        <TodoList
          handleDeleteTodo={handleDeleteTodo}
          todos={todos}
          toggleTodo={toggleTodo}
        ></TodoList>
        ;
        <input ref={todoNameRef} type="text" />
        <button onClick={handleAddTodo}>create todo</button>
        <button onClick={handleClearTodos}>clear todos</button>
        <div>{todos.filter((todo) => !todo.completed).length} left to do</div>
        {/* globally changes theme color */}
        <button
          onClick={() => {
            setTheme((prevTheme) => {
              console.log(prevTheme);
              return prevTheme === "red" ? "blue" : "red";
            });
          }}
        >
          TOGGLE THEME
        </button>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
