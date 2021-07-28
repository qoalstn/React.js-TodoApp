import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            text={todo.text}
            todos={todos}
            setTodos={setTodos}
          /> // Form.js에서 set한 key와 text를 App.js를 통해 가져와 Todo.js로 넘긴다.
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
