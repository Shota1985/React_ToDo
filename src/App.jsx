import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput/TaskInput.jsx";
import "./App.css";
import TaskItem from "./components/TaskItem/TaskItem.jsx";
import TaskControls from "./components/TaskControls/TaskControls.jsx";

function App() {
  
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('items')) || []);
  
useEffect(() => {
    localStorage.setItem("items", JSON.stringify(todos));
  }, [todos]);

  function putTodo(value) {
    if (value) {
      setTodos([
        ...todos,
        { id: Date.now(), text: value, done: false, redact: false },
      ]);
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
  function clearDoneTodos() {
    const doneTasks = todos.filter((e) => !e.done);
    setTodos(doneTasks);
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
                {todos.filter((e) => e.done).length}
              </span>
            </div>
            <div className="delete__btns">
              <button className="clear" onClick={clearTodos}>
                Clear All
              </button>
              <TaskControls clearDoneTodos={clearDoneTodos} />
            </div>
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
