import { combineReducers } from "redux";

import TodosReducer from "Todos/TodosReducer";

export default combineReducers({
  todosReducer: TodosReducer,
});
