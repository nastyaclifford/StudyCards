import { observable, action } from "mobx";
import GET from "../services/GET";

class WordStore {
  @observable words = [];
  @observable flag = true;

  @action async getWordServer() {
    const wordServer = await GET.getWord();
    this.words = wordServer;
  }

  @action setWords = (newWords) => {
    this.words = newWords;
  };

  @action toggleFlag = () => {
    this.flag = !this.flag;
  };
}

const wordStore = new WordStore();

export default wordStore;
