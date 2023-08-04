import style from './tableItem.module.scss'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCircleCheck, faRotateLeft, faTrash } from '@fortawesome/free-solid-svg-icons';



export default function Table(props) {
    const [deleted, setDeleted] = useState (true);
    const [edit, setEdit] = useState (true);

    function deleteWord () {
        setDeleted(!deleted)
    }

    function editWord () {
        setEdit(!edit)
    }
    return(
        <div className={deleted === true ? style.row : style.row_noDisplay}>
                    {edit === true ? <div className={style.col}>{props.english}</div> : <input className={style.input} placeholder={props.english}></input>}
                    {edit === true ?<div className={style.col}>{props.transcription}</div> : <input className={style.input} placeholder={props.transcription}></input>}
                    {edit === true ? <div className={style.col}>{props.russian}</div> : <input className={style.input} placeholder={props.russian}></input>}
                    <div className={style.col}>
                    <div className={style.col_buttons}>
                    {edit === true ? " " : <div className={style.button}><FontAwesomeIcon icon={faCircleCheck} /></div>}
                         {edit === true ? <div onClick={editWord} className={style.button}><FontAwesomeIcon icon={faPenToSquare} /></div>: <div onClick={editWord} className={style.button}><FontAwesomeIcon icon={faRotateLeft} /></div>}
                    </div> </div>
                    <div className={style.col}>
                    <div onClick={deleteWord} className={style.button}><FontAwesomeIcon icon={faTrash} /></div>
                    </div> 
                </div>  
    )
}