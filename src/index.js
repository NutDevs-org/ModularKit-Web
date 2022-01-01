import React from "react";
import ReactDOM from "react-dom";
import "./Common/main.scss";
import { FileViewer, Header, Footer } from "./Modules";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <React.Fragment>
    <Header />
    <FileViewer />
    <Footer />
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();