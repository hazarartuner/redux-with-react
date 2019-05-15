import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { configureStore } from "redux/store";

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
