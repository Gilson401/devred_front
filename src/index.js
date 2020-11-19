import React from "react";
import ReactDOM from "react-dom";
import Router from "./router";
import 'antd/dist/antd.css';// ant design stylesheet
import "./assets/scss/style.scss";
import GlobalStyle from "./assets/globalStyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
