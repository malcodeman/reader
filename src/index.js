import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./styles/normalize.css";
import App from "./features/App";
import store from "./state/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
