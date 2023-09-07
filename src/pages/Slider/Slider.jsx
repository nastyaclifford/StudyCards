import { useState, useEffect } from 'react'
import Card from "../../components/Card/Card"
import arr from "../../data/words.json"
import style from "./slider.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft,faCircleRight } from '@fortawesome/free-solid-svg-icons';  //импортируем компонент Card, массив с данными для карточек, стили


function Slider(){ //создаем компонент Slider
    
    /**const i = Math.floor(Math.random() * words.length); //создаем переменную для рандомного индекса информации о карточке (объекта массива)
    const object = words[i]; //создаем переменную для рандомной карточки **/

    const [words, setWords] = useState ([false]) //сохраняем массив данных
    const [count, setCount] = useState (0) //получаем индекс объекта массива, чтобы получить нужный нам объект, изначальный индекс 0
    const [cardCount, setCardCount] = useState (0) //задаем состояние для подсчета изученных карточек
    useEffect (() => {setWords (arr)}, []) //запрос к массиву 1 раз, когда создается компонент

    const object = words[count] //создаем переменную для объекта массива

function handleClickCount (){ //создаем функцию для подсчета изученных карточек
    setCardCount(cardCount + 1);
}    

function handleClickPrev (){ //создаем функцию для показа предыдущей карточки
let copyCount = count //копируем count, тк мы не можем напрямую его менять из состояния
copyCount === 0 ? setCount(arr.length - 1) : setCount(copyCount-1) //создаем условие, если count равен 0, то мы возвращаемся на последнюю карточку из массива и отнимаем 1

}

function handleClickNext (){ //создаем функцию для показа следующей карточки
    let copyCount = count //копируем count, тк мы не можем напрямую его менять из состояния
copyCount === arr.length -1 ? setCount(0) : setCount(copyCount+1) //создаем условие, если count равен индексу последней карточки из массива, то мы возвращаемся на первую карточку из массива и добавляем 1
}
    

if (!words){ // если массив не был передан, то высвечивается сообщение о загрузке
    return <h1>loading</h1>
}


    return ( //возвращаем разметку и вызываем нужную нам информацию для компонента Card из объекта из массива, а также вешаем обработчики событий на кнопки 
        <div>
        <div className={style.slider}>
         <button className={style.button_prev} onClick={handleClickPrev}><FontAwesomeIcon icon={faCircleLeft} /></button> 
        <Card 
        english = {object.english}
        transcription = {object.transcription}
        russian = {object.russian}
        index = {object.index}
        key = {object.index}
        countfunction = {handleClickCount}
        />
    <button className={style.button_next} onClick={handleClickNext}><FontAwesomeIcon icon={faCircleRight} /></button>
    
       </div>
       <div className={style.text}>Cards studied: {cardCount}</div>
       </div>
       
        
    )
}

export default Slider;
