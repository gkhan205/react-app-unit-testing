import React from "react";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureMockStore from "redux-mock-store";

import store from "store";

const middlewares = [thunk];
export const mockStore = configureMockStore(middlewares);

export const renderWithRedux = (component) =>
  render(<Provider store={store}>{component}</Provider>);
