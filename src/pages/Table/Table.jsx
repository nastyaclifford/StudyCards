import TableItem from "../../components/TableItem/TableItem"
//import words from "../../data/words.json"
import { MyContext } from "../../context/MyContext";
import { useContext } from "react";
import style from './table.module.scss' //импортируем компонент TableItem, массив с информацией о карточках, стили




function Table(){ //создаем компонент Table
    const {words, flag, setFlag} = useContext(MyContext) 
    console.log ({words})
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
        {...item} flag={flag} setFlag={setFlag}/>))}</div>
        </div>
        
    )
}

export default Table;