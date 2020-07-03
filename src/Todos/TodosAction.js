import * as actionTypes from "store/types";

export const addTodo = (todo) => (dispatch, getState) => {
  const { todos } = getState().todosReducer;

  const clonedTodos = [...todos];
  clonedTodos.push({ id: todos.length + 1, todo });

  return dispatch({
    type: actionTypes.ADD_TODO,
    payload: clonedTodos,
  });
};

export const editTodo = (todo) => (dispatch, getState) => {
  const { todos } = getState().todosReducer;

  const clonedTodos = [...todos];
  const index = clonedTodos.findIndex((todoItem) => todo.id === todoItem.id);
  clonedTodos[index] = todo;

  dispatch({
    type: actionTypes.EDIT_TODO,
    payload: clonedTodos,
  });
};

export const deleteTodo = (todoId) => (dispatch, getState) => {
  const { todos } = getState().todosReducer;

  const clonedTodos = [...todos];
  const index = clonedTodos.findIndex((todoItem) => todoId === todoItem.id);
  clonedTodos.splice(index, 1);

  return dispatch({
    type: actionTypes.DELETE_TODO,
    payload: clonedTodos,
  });
};
