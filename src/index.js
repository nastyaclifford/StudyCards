import React from "react";
import ReactDOM from "react-dom/client";
import wordStore from "../src/stores/WordsStore";
import { Provider } from "mobx-react";
import App from "./components/App.jsx";
import ObserverApp from "./stores/ObserverApp";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider wordStore={wordStore}>
    <ObserverApp>
      <App />
    </ObserverApp>
  </Provider>
);
