import React from "react";
import TodoList from "./components/TodoList";
import TodoListDone from "./components/TodoListDone";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div className="m-4">
      <div style={{ width: "500px" }} className="mb-4">
        <AddTodo />
      </div>
      <div className="mb-4">
        <b>Todo List:</b>
        <TodoList />
      </div>
      <div>
        <b>Checked List:</b>
        <TodoListDone />
      </div>
    </div>
  );
}

export default App;
