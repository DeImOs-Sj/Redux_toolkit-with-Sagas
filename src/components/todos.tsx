import React from "react";
import { useSelector } from "react-redux";

function Todos() {
  console.log("heyyy");
  const todo = useSelector((state) => state.todos);
  console.log("hey", todo);

  return (
    <div>
      {todo.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
}

export default Todos;
