import React from "react";

function TodoItem({ todoItem }) {
  return (
    <div>
      <input
        id={`todo-${todoItem.id}`}
        type="checkbox"
        defaultChecked={todoItem.completed}
      />
      <label htmlFor={`todo-${todoItem.id}`}>{todoItem.title}</label>
    </div>
  );
}

export default TodoItem;
