import React from "react";
import { connect } from "react-redux";

import AddTodo from "./frames/AddTodo";
import TodoItem from "./frames/TodoItem";
import { addTodo, deleteTodo } from "./TodosAction";

const Todos = ({ todos, addTodo, deleteTodo }) => {
  return (
    <div className="todos-container mt-5">
      <AddTodo onAdd={addTodo} />
      {todos.map((item, index) => (
        <TodoItem item={item} key={index} onDelete={deleteTodo} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ todosReducer }) => {
  return {
    todos: todosReducer.todos,
  };
};

export default connect(mapStateToProps, { addTodo, deleteTodo })(Todos);
