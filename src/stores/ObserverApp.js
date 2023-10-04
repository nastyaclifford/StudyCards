import React, { useEffect } from "react";
import { observer } from "mobx-react";
import wordStore from "./WordsStore";

const ObserverApp = observer(({ children }) => {
  useEffect(() => {
    wordStore.getWordServer();
  }, []);

  if (!wordStore.words) return <h1>Loading...</h1>;

  return children;
});

export default ObserverApp;
