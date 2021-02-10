import React, { useState, useEffect, useRef } from "react";

/**
 * @author
 * @function TodoForm
 **/

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Edit your note"
            value={input}
            name="text"
            className="todo__input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo__button edit" onClick={handleSubmit}>
            Edit
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a note"
            value={input}
            name="text"
            className="todo__input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo__button" onClick={handleSubmit}>
            Add Todo
          </button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
