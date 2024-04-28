import React from "react";
import "./Common/main.scss";
import { FileViewer, Header, Footer } from "./Modules";

const root = createRoot(document.getElementById("root"));
  root.render(
  <React.Fragment>
    <Header />
    <FileViewer />
    <Footer />
  </React.Fragment>
  );