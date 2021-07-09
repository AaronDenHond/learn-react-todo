import React, { useState, useRef } from "react";
//here we import the useState hook so we can manage state.
//hooks can only be used in function components.
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [todos, setTodos] = useState([]);
  //the argument in useState is our default state, can be an empty array of todos, or multiple hardcoded ones,...

  const todoNameRef = useRef();

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") {
      return;
    }
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
    //clears input field after adding
    console.log(todos.length);
  }
  return (
    <>
      {/* we need this empty element (called a fragment, to return everything inside 1 element). we cant return more than 1 thing in a js function */}
      <TodoList todos={todos} />
      {/* first component we will make */}
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>add Todo</button>
      <button>clear completed</button>
      <div>0 left to do</div>
    </>
  );
}
export default App;

/* components have props(properties). They work just like html attributes. Above we added the props todos to TodoList and gave it a value
 {} means we're passing a variable instead of like a string */
