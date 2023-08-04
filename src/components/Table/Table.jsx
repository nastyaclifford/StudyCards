import TableItem from "../TableItem/TableItem"
import words from "../../data/words.json"
import style from './table.module.scss'



function Table(){
 
    return (
        <div>
        <div className={style.table}>
        <div className={style.row}>
        <div className={style.col}>English</div>
        <div className={style.col}>Transcription</div>
        <div className={style.col}>Russian</div>
        <div className={style.col}>Edit</div>
        </div>
        {words.map ((item, index)=> (
        <TableItem 
        english = {item.english}
        transcription = {item.transcription}
        russian = {item.russian}
        key = {index}/>))}</div>
        </div>
        
    )
}

export default Table;