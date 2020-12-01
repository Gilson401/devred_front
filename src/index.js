import React from "react";
import ReactDOM from "react-dom";
import Router from "./router";
import "antd/dist/antd.css"; // ant design stylesheet
import "./assets/scss/style.scss";
import GlobalStyle from "./assets/globalStyle";
import { Provider } from "react-redux";
import store from "./store";
import ToastrComponent from "./config/toastr";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Router />
    <ToastrComponent />
  </Provider>,
  document.getElementById("root")
);
