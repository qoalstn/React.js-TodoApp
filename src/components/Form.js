import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
  // App.js에서 선언한 useState를 props로 받았다.
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault(); // 새로고침 되지 않게 해준다.
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]); // 버튼을 누르면 누적된 todo list (todos)와 괄호안에 새로운 todo를 todos에 추가한다.
    setInputText(""); //입력창은 빈칸으로 만든다.
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
