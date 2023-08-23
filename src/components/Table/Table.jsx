import TableItem from "../TableItem/TableItem"
import words from "../../data/words.json"
import style from './table.module.scss' //импортируем компонент TableItem, массив с информацией о карточках, стили



function Table(){ //создаем компонент Table
 
    return ( //возвращаем разметку таблицы, создаем функцию map для обращения к каждому объекту из массива и использования их в TableItem
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
        key = {index}
        {...item}/>))}</div>
        </div>
        
    )
}

export default Table;