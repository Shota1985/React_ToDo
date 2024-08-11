import { useState } from "react";
import TaskInput from "./components/TaskInput/TaskInput.jsx";
import "./App.css";
import TaskItem from "./components/TaskItem/TaskItem.jsx";

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
        return { ...todo, done: !todo.done };
      })
    );
  }
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function clearTodos() {
    setTodos([]);
  }
  //completeTodos dose not work!!!
  function completeTodos() {
    setTodos(
      todos.filter((todo) => {
        if (todo == todo.done) return { ...todo, done: todo.done };
      })
    );
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
                <TaskItem
                  todo={todo}
                  key={todo.id}
                  toglleTodo={toglleTodo}
                  removeTodo={removeTodo}
                />
              );
            })}
            <div className="info">
              <p>All todos: {todos.length}</p>

              <span>
                Complete:
                {completeTodos}
              </span>
            </div>
            <button className="clear" onClick={clearTodos}>
              Clear All
            </button>
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
