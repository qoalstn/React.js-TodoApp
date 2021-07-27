import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputTex, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>hello world</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputTex={inputTex}
        setInputText={setInputText}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
