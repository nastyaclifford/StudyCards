import { createContext } from "react";
import { useState, useEffect } from "react";
import GET from "../servers/GET";

export const MyContext = createContext();

export function MyContextComponent({ children }) {
  const [words, setWords] = useState(false);
  const value = { words, setWords };
  useEffect(() => {
    getWordServer();
  }, []);

  async function getWordServer() {
    const wordServer = await GET.getWord();
    setWords(wordServer);
  }
  if (!words) return <h1>Loading...</h1>;

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}
