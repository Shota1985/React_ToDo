import React, { useState } from "react";
import '../TaskInput/TaskInput.module.scss'
function taskInput(props) {
  const [value, setValue] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.putTodo(value);
      setValue("")
    }
    
    }>
      <input
              type="text"
              placeholder="Добавь таску..."
              className="input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

export default taskInput;
