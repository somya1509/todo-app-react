import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./Todoform";

/**
 * @author
 * @function TodoList
 **/

const TodoList = (props) => {
  const [todo, setTodo] = useState([]);

  const addTodo = (todos) => {
    if (!todos.text || /^\s*$/.test(todos.text)) {
      return;
    }

    const newTodo = [todos, ...todo];
    setTodo(newTodo);
    // console.log(...todo);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodo((prev) => prev.map((item) => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = (id) => {
    const removeArr = [...todo].filter((todos) => todos.id !== id);
    setTodo(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodo = todo.map((todos) => {
      if (todos.id === id) {
        todos.isComplete = !todos.isComplete;
      }
      return todos;
    });
    setTodo(updatedTodo);
  };

  return (
    <div className="todo__list">
      <h1>Things to do today</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  );
};

export default TodoList;
