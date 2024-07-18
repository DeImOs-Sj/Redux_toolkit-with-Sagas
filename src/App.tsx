import { React } from "react";
import AddTodo from "./components/addTodo";
import Delete from "./components/todos";

function App() {
  return (
    <>
      <AddTodo />
      <Delete />
    </>
  );
}

export default App;
