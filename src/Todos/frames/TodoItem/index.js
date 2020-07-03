import React from "react";

const TodoItem = ({ item, onDelete }) => (
  <div className="todo-item-container d-flex justify-content-between align-items-center mt-1 mb-1">
    <p data-testid="todo-name">{item.todo}</p>
    <button
      className="btn btn-danger"
      data-testid="delete-button"
      onClick={() => onDelete(item.id)}
    >
      Delete
    </button>
  </div>
);

export default TodoItem;
