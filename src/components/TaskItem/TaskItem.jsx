import React from 'react'

function TaskItem({todo, toglleTodo, removeTodo}) {
  return (
    <li
      className={todo.done ? "todo done" : "todo"}
      
      onClick={() => {
        toglleTodo(todo.id);
      }}
    >
      {todo.text}
      <img
        src={todo.done ? "./Checked.png" : "./Check.png"}
        onClick={(e) => {
          toglleTodo(todo.id);
        }}
        alt="Check"
        className="check"
      />
      <img
        src="./close.png"
        alt="close"
        className="delete"
        onClick={(evt) => {
          evt.stopPropagation();
          removeTodo(todo.id);
        }}
      />
    </li>
  );
}

export default TaskItem