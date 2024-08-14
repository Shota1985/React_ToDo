import React, { useEffect, useState } from "react";
import styles from './TaskInput.module.scss';
import { jsxs } from "react/jsx-runtime";

function taskInput(props) {
  const [value, setValue] = useState("");
  
  return (
    <form className="input__form"
      onSubmit={(e) => {
        e.preventDefault();
        props.putTodo(value);
        setValue("");
      }}
    >
      <input
        type="text"
        placeholder="Добавь таску..."
        className={styles.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="add__btn"
        onClick={(e) => {
          e.preventDefault();
          props.putTodo(value);
          setValue("");
        }}
      >
        +
      </button>
    </form>
  );
}

export default taskInput;
