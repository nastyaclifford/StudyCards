import { useState } from 'react';
import style from './tableItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCircleCheck, faRotateLeft, faTrash } from '@fortawesome/free-solid-svg-icons'; 



export default function TableItem(props) {
    const [edit, setEdit] = useState (true); 
    const [newEnglish, setNewEnglish] = useState('');
    const [newTranscription, setNewTranscription] = useState('');
    const [newRussian, setNewRussian] = useState('');
    const {english, transcription, russian, id, delWord, updWord } = props;

    const rusLower = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
    const rusUpper = rusLower.toUpperCase()
    const enLower = 'abcdefghijklmnopqrstuvwxyz'
    const enUpper = enLower.toUpperCase()
    const rus = rusLower + rusUpper
    const en = enLower + enUpper

    function handleChange(event) {
        const { name, value } = event.target;
        if (name === 'newEnglish') {
            setNewEnglish(value);
        } else if (name === 'newTranscription') {
            setNewTranscription(value);
        } else if (name === 'newRussian') {
            setNewRussian(value);
        }
    }

    const getChar = (event) => String.fromCharCode(event.keyCode || event.charCode)

    function checkLang (event) {
      const char = getChar(event)
      const {name}= event.target;
        if (name === 'newEnglish') {
            if (rus.includes(char)) {
                alert ("English language expected");
                event.target.value = '';
                event.preventDefault()
            }
        } else if (name === 'newTranscription') {
            if (rus.includes(char)) {
                alert ("English language expected");
                event.target.value = '';
                event.preventDefault()
            }
        } else if (name === 'newRussian') {
            if (en.includes(char)) {
             alert ("Russian language expected");
             event.target.value = '';
             event.preventDefault()
        }
    }
}

function isValidString(str, charset) {
    const regex = new RegExp(`^[${charset}]+$`);
    return regex.test(str);
  }
  


  async function onSaveButtonClick() {
    console.log('onSaveButtonClick called with ID:', id);
    if (
        isValidString(newEnglish, en) &&
        isValidString(newTranscription, en) &&
        isValidString(newRussian, rus)
      ) {
                const updatedData = {
                id: id,
                english: newEnglish,
                transcription: newTranscription,
                russian: newRussian,
                tags: "",
                tags_json: "[]"
            };
            updWord(id, updatedData);
            console.log(updatedData);
            
    } else 
        console.log("Please, check your words once again");
      }
  
      function editWord () { 
        setEdit(!edit)
    }

    return( 
        <div className={style.row}>
                    {edit === true ? <div className={style.col}>{english}</div> : <input name="newEnglish" onChange={handleChange} onKeyPress = {checkLang} className={newEnglish.length === 0 ? style.input_error : style.input} placeholder={english}></input>}
                    {edit === true ?<div className={style.col}>{transcription}</div> : <input name="newTranscription" onChange={handleChange} onKeyPress = {checkLang} className={newTranscription.length === 0 ? style.input_error : style.input} placeholder={transcription}></input>}
                    {edit === true ? <div className={style.col}>{russian}</div> : <input name="newRussian" onChange={handleChange} onKeyPress = {checkLang} className={newRussian.length === 0 ? style.input_error : style.input} placeholder={russian}></input>}
                    <div className={style.col}>
                    <div className={style.col_buttons}>
                    {edit === true ? " " : <button disabled= {newEnglish.length === 0 || newTranscription.length === 0 || newRussian.length === 0}  onClick={onSaveButtonClick} ><FontAwesomeIcon icon={faCircleCheck} /></button>}
                         {edit === true ? <button onClick={editWord} ><FontAwesomeIcon icon={faPenToSquare} /></button>: <button onClick={editWord} ><FontAwesomeIcon icon={faRotateLeft} /></button>}
                    </div> </div>
                    <div className={style.col}>
                    <button onClick={delWord} ><FontAwesomeIcon icon={faTrash} /></button>
                    </div> 
                </div>  
    )
}