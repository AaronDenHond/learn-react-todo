import React from "react";
//create snippet with rfc + tab
import Todo from "./Todo";

export default function TodoList({ todos }) {
  return todos.map((todo) => {
    return <Todo key={todo.id} todo={todo} />;
  });
}

/* we need unique ID's per list item, so that React doesnt have to rerender every Todo component in the list 
whenever a component gets updated. we choose a key with value {todo} here since every todo name will be unique*/
