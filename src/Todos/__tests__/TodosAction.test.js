import * as actionTypes from "store/types";
import { mockStore } from "testUtils";

import * as actions from "../TodosAction";
import { initialState } from "../TodosReducer";

describe("TodosAction Test", () => {
  const store = mockStore({ todosReducer: initialState });

  it("should test addTodo action", () => {
    const expectedActions = {
      type: actionTypes.ADD_TODO,
      payload: [{ id: 1, todo: "Test" }],
    };

    let calledAction = store.dispatch(actions.addTodo("Test"));
    expect(calledAction).toStrictEqual(expectedActions);
  });

  it("should test deleteTodo action", () => {
    const expectedActions = {
      type: actionTypes.DELETE_TODO,
      payload: [],
    };

    let calledAction = store.dispatch(actions.deleteTodo(1));
    expect(calledAction).toStrictEqual(expectedActions);
  });
});
