import { useState } from 'react';
import style from './tableItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCircleCheck, faRotateLeft, faTrash } from '@fortawesome/free-solid-svg-icons'; 



export default function TableItem(props) {
    const [deleted, setDeleted] = useState (true); 
    const [edit, setEdit] = useState (true); 
    const [newEnglish, setNewEnglish] = useState('');
    const [newTranscription, setNewTranscription] = useState('');
    const [newRussian, setNewRussian] = useState('');
    const {english, transcription, russian} = props;

    const handleChange = event => {
        const {name,value }= event.target;
        if (name === 'newEnglish') {
          setNewEnglish(value);
        } else if (name === 'newTranscription') {
          setNewTranscription(value);
        } else if (name === 'newRussian') {
          setNewRussian(value);
        }
      };


    function deleteWord () { 
        setDeleted(!deleted)
    }

    function editWord () { 
        setEdit(!edit)
    }
    return( 
        <div className={deleted === true ? style.row : style.row_noDisplay}>
                    {edit === true ? <div className={style.col}>{english}</div> : <input name="newEnglish" onChange={handleChange} className={newEnglish.length === 0 ? style.input_error : style.input} placeholder={props.english}></input>}
                    {edit === true ?<div className={style.col}>{transcription}</div> : <input name="newTranscription" onChange={handleChange} className={newTranscription.length === 0 ? style.input_error : style.input} placeholder={props.transcription}></input>}
                    {edit === true ? <div className={style.col}>{russian}</div> : <input name="newRussian" onChange={handleChange} className={newRussian.length === 0 ? style.input_error : style.input} placeholder={props.russian}></input>}
                    <div className={style.col}>
                    <div className={style.col_buttons}>
                    {edit === true ? " " : <button disabled= {newEnglish.length === 0 || newTranscription.length === 0 || newRussian.length === 0} ><FontAwesomeIcon icon={faCircleCheck} /></button>}
                         {edit === true ? <button onClick={editWord} ><FontAwesomeIcon icon={faPenToSquare} /></button>: <button onClick={editWord} ><FontAwesomeIcon icon={faRotateLeft} /></button>}
                    </div> </div>
                    <div className={style.col}>
                    <button onClick={deleteWord} ><FontAwesomeIcon icon={faTrash} /></button>
                    </div> 
                </div>  
    )
}