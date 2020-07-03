import React from "react";
import { cleanup } from "@testing-library/react";
import user from "@testing-library/user-event";

import { renderWithRedux } from "testUtils";

import AddTodo from "../";

const addTodo = jest.fn();

describe("AddTodo Tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = renderWithRedux(<AddTodo onAdd={addTodo} />);
  });

  afterEach(cleanup);

  it("should test input value change", () => {
    const { getByTestId } = wrapper;

    const input = getByTestId("add-todo-input");
    user.type(input, "New todo");
    expect(input).toHaveValue("New todo");
  });

  it("should test button click to add new todo", () => {
    const { getByTestId } = wrapper;

    const button = getByTestId("add-todo-button");
    user.click(button);
    expect(addTodo).toHaveBeenCalled();
    expect(addTodo).toHaveBeenCalledTimes(1);

    const input = getByTestId("add-todo-input");
    expect(input).toHaveValue("");
  });
});
