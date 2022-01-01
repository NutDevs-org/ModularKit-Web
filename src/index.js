import React from "react";
import ReactDOM from "react-dom";
import "./Common/main.scss";
import { FileViewer, Header, Footer } from "modularkit-web/modules";

ReactDOM.render(
  <React.Fragment>
    <Header />
    <FileViewer />
    <Footer />
  </React.Fragment>,
  document.getElementById("root")
);
