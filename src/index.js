import React from "react";
import ReactDom from "react-dom";

import RenderPage from "./components/RenderPage";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (
    <div>
      <RenderPage />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
