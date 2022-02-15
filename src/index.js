import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./styles/index.css";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppRouter />
      <ToastContainer />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
