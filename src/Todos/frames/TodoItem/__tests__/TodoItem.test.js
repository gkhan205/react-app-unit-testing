import React from "react";
import { cleanup } from "@testing-library/react";
import user from "@testing-library/user-event";

import { renderWithRedux } from "testUtils";

import TodoITem from "../";

const deleteTodo = jest.fn();
const mockItem = {
  id: 1,
  todo: "Test Todo",
};

describe("TodoItem Tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = renderWithRedux(
      <TodoITem item={mockItem} onDelete={deleteTodo} />
    );
  });

  afterEach(cleanup);

  it("should test todo render", () => {
    const { getByTestId } = wrapper;
    const todoName = getByTestId("todo-name");
    expect(todoName).toHaveTextContent("Test Todo");
  });

  it("should test delete button click", () => {
    const { getByTestId } = wrapper;
    const deleteButton = getByTestId("delete-button");
    user.click(deleteButton);
    expect(deleteTodo).toHaveBeenCalled();
    expect(deleteTodo).toHaveBeenCalledTimes(1);
  });
});
