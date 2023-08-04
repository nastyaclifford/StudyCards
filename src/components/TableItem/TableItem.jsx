import style from './tableItem.module.scss'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCircleCheck, faRotateLeft, faTrash } from '@fortawesome/free-solid-svg-icons'; //подключаем стили, состояние useState, иконки



export default function TableItem(props) { //создаем компонент TableItem
    const [deleted, setDeleted] = useState (true); //задаем состояние для кнопки удаления
    const [edit, setEdit] = useState (true); //задаем состояние для кнопки редактирования

    function deleteWord () { //создаем функцию для кнопки удаления, которая будет менять состояние на deleted - false
        setDeleted(!deleted)
    }

    function editWord () { ////создаем функцию для кнопки редактирования, которая будет менять состояние на edit - false
        setEdit(!edit)
    }
    return( //возвращаем разметку для строки в таблице с информацией о слове, добавляем кнопки удаления и редактирования, вешаем на них обработчики событий
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