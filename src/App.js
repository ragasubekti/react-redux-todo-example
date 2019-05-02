import React from "react";
import TodoList from "./components/TodoList";
import TodoListDone from "./components/TodoListDone";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div className="App">
      <div>
        <AddTodo />
      </div>
      <div>
        <span>Todo List:</span>
        <TodoList />
      </div>
      <div>
        <span>Checked List:</span>
        <TodoListDone />
      </div>
    </div>
  );
}

export default App;
