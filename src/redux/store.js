import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "redux/reducers";

export function configureStore(initialState) {
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  const enhancer = composeEnhancers(applyMiddleware(thunk));

  return createStore(reducers, initialState, enhancer);
}
