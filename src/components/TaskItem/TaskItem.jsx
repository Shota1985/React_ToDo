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
      <div><img
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
        <img src="./redact.png" alt="redact" className='redact' onClick={(evt) => { evt.stopPropagation(); }}/></div>
    </li>
  );
}

export default TaskItem