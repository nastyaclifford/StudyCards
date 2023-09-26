import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App.jsx";
import { MyContextComponent } from "./context/MyContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyContextComponent>
    <App />
  </MyContextComponent>
);
