import React, { useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAdd(inputValue);
    setInputValue("");
  };

  return (
    <div className="add-todo-container" data-testid="add-todo-container">
      <form data-testid="add-todo-form" onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            data-testid="add-todo-input"
            className="form-control"
            placeholder="Write..."
            aria-label="todo"
            aria-describedby="button-addon2"
            value={inputValue}
            onChange={handleChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              id="button-addon2"
              data-testid="add-todo-button"
              onClick={handleSubmit}
            >
              Add Todo
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
