import { createContext } from "react";
import { useState, useEffect } from "react";
import GET from "../services/GET";

export const MyContext = createContext();

export function MyContextComponent({ children }) {
  const [words, setWords] = useState(false);
  const [flag, setFlag] = useState(true);
  const value = { words, setWords, flag, setFlag };
  useEffect(() => {
    getWordServer();
  }, [flag]);

  async function getWordServer() {
    const wordServer = await GET.getWord();
    setWords(wordServer);
  }
  if (!words) return <h1>Loading...</h1>;

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}
