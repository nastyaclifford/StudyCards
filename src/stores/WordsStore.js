import { observable, action } from "mobx";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import GET from "../services/GET";

class WOrdStore extends React.Component{
  @observable words = [];
  @observable flag = true;

  @action async getWordServer() {
    const wordServer = await GET.getWord();
    this.words = wordServer;
  }

  @action toggleFlag = () => {
    this.flag = !this.flag;
  };
}

}

/* class WordStore {
  @observable words = [];
  @observable flag = true;

  @action async getWordServer() {
    const wordServer = await GET.getWord();
    this.words = wordServer;
  }

  @action toggleFlag = () => {
    this.flag = !this.flag;
  };
}

const wordStore = new WordStore();

class DataMobX {
  constructor() {
    this.wordStore = wordStore;
  }

  observerComponent = observer(({ children }) => {
    useEffect(() => {
      this.wordStore.getWordServer();
    }, [this.wordStore.flag]);

    if (!this.wordStore.words) return <h1>Loading...</h1>;

    return children;
  });
}

export default dataMobXInstance;

export { wordStore };
 */