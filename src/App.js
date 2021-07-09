import React, { useState } from "react";
//here we import the useState hook so we can manage state.
import TodoList from "./components/TodoList";
function App() {
  const [todos, setTodos] = useState(["Todo 1", "Todo 2", "Todo 3"]);
  //the argument in useState is our default state, can be an empty array of todos, or multiple hardcoded ones,...
  return (
    <>
      {/* we need this empty element (called a fragment, to return everything inside 1 element). we cant return more than 1 thing in a js function */}
      <TodoList todos={todos} />
      {/* first component we will make */}
      <input type="text" />
      <button>add Todo</button>
      <button>clear completed</button>
      <div>0 left to do</div>
    </>
  );
}
export default App;

/* components have props(properties). They work just like html attributes. Above we added the props todos to TodoList and gave it a value
 {} means we're passing a variable instead of like a string */
