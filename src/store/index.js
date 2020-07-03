import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import mainReducer from "./mainReducer";

const middlewares = [thunk];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  mainReducer,
  composeEnhancer(applyMiddleware(...middlewares))
);

export default store;
