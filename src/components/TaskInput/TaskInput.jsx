import React, { useState } from "react";
import styles from './TaskInput.module.scss';

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
