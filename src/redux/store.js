import { createStore } from "redux";

import reducers from "redux/reducers";

export function configureStore(initialState) {
  const enhancers = [
    process.env.NODE_ENV !== "production" &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  ];

  return createStore(reducers, initialState, ...enhancers);
}
