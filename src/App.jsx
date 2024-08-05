import { useState } from "react";
import TaskInput from "./components/TaskInput/TaskInput.jsx";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  function putTodo(value) {
    if (value) {
      setTodos([...todos, { id: Date.now(), text: value, done: false }]);
    } else {
      alert("Введите текст");
    }
  }
  function toglleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {...todo, done: !todo.done}
      })
    );
  }
  function removeTodo (params) {
    
  }
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <h1 className="title">TO-DO-list</h1>
          <TaskInput putTodo={putTodo} />
          <ol className="todo__tasks" type="I">
            {todos.map((todo) => {
              return (
                <li className={todo.done ? 'todo done' : "todo"} key={todo.id} onClick={() => toglleTodo(todo.id)}>
                  {todo.text}
                  <img src="./Delete.png" alt="Delete" className="delete" onClick={}/>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
