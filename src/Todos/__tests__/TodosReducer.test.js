import * as actionTypes from "store/types";

import reducer, { initialState } from "../TodosReducer";

describe("TodosReducer Test", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should add new todo", () => {
    expect(
      reducer([], {
        type: actionTypes.ADD_TODO,
        payload: { id: 1, todo: "Test" },
      })
    ).toEqual({ todos: { id: 1, todo: "Test" } });
  });

  it("should remove todo", () => {
    expect(
      reducer(
        { todos: [{ id: 1, todo: "Test" }] },
        { type: actionTypes.DELETE_TODO, payload: [] }
      )
    ).toEqual({ todos: [] });
  });
});
