import { observer, inject } from 'mobx-react';
import React, { useState, useEffect } from "react";
import TableItem from "../../components/TableItem/TableItem";
import POST from "../../services/POST";
import DEL from "../../services/DEL";
import PUT from "../../services/PUT";
import style from './table.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

  const Table = inject('wordStore')(observer(({ wordStore }) => {
  const [newWordEng, setNewWordEng] = useState('');
  const [newWordRus, setNewWordRus] = useState('');
  const [itemsToRender, setItemsToRender] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      wordStore.getWordServer();
      setItemsToRender(wordStore.words.map((item, index) => (
        <TableItem
          key={index}
          {...item} flag={wordStore.flag} setFlag={wordStore.toggleFlag}
          delWord={() => deleteWord(item.id)} updWord={(id, updatedData) => updateWord(id, updatedData)} />
      )));
    }, 1000);
    return () => clearTimeout(timer);
  }, [wordStore.words, wordStore.flag]);


  async function deleteWord(id) {
    await DEL.delWord(id);
    console.log("delete")
  }

async function updateWord (id,updatedData) { 
    await PUT.putWord(id, updatedData); 
    console.log("updated", wordStore)
} 

  async function addWordToServer() {
    if (newWordEng.trim() === '' || newWordRus.trim() === '') {
      return;
    }
    const newWordData = {
      id: "123",
      english: newWordEng,
      transcription: "transcription",
      russian: newWordRus,
      tags: "",
      tags_json: "[]"
    };
    await POST.postWord(newWordData);
    setNewWordEng('');
    setNewWordRus('');
    wordStore.toggleFlag();
    wordStore.getWordServer();
    console.log(2222);
  }

  return (
    <div>
      <div className={style.table}>
        <div className={style.row_input}>
          <input type="text" value={newWordEng} onChange={(e) => setNewWordEng(e.target.value)} className={style.input} placeholder="English" />
          <input type="text" value={newWordRus} onChange={(e) => setNewWordRus(e.target.value)} className={style.input} placeholder="Russian" />
          <div className={style.col}>
            <button disabled={newWordEng.length === 0 || newWordRus.length === 0} onClick={addWordToServer}><FontAwesomeIcon icon={faCircleCheck} /></button>
          </div>
        </div>
      </div>
      <div className={style.table}>
        <div className={style.row}>
          <div className={style.col}>English</div>
          <div className={style.col}>Transcription</div>
          <div className={style.col}>Russian</div>
          <div className={style.col}>Edit</div>
        </div>
        {itemsToRender}
      </div>
    </div>
  );
}));

export default Table;