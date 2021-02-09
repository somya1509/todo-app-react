import React, { useState } from "react";
import TodoList from "./TodoList";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./Todoform";

/**
 * @author
 * @function Todo
 **/

const Todo = ({ todo, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return todo.map((todos, index) => (
    <div
      className={todos.isComplete ? "todo__row complete" : "todo__row"}
      key={index}
    >
      <div key={todos.id} onClick={() => completeTodo(todos.id)}>
        {todos.text}
      </div>
      <div className="todo__icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todos.id)}
          className="delete__icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todos.id, value: todos.text })}
          className="edit__icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
