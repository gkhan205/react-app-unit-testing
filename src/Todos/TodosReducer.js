import * as actionTypes from "store/types";

export const initialState = {
  todos: [],
};

const TodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
    case actionTypes.EDIT_TODO:
    case actionTypes.DELETE_TODO:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};

export default TodosReducer;
