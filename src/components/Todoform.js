import React, { useState, useEffect, useRef } from "react";

/**
 * @author
 * @function TodoForm
 **/

const TodoForm = (props) => {
  const [input, setInput] = useState("");

//   const useEffect = () => {

//   }

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
      });
    setInput('');
  };

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a note"
        value={input}
        name="text"
        className="todo__input"
        onChange={handleChange}
      />
      <button className="todo__button">Add Todo</button>
    </form>
  );
};

export default TodoForm;
