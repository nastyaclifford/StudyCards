import { useState } from 'react'
import Card from "../../components/Card/Card"
import { MyContext } from "../../context/MyContext";
import { useContext } from "react";
import arr from "../../data/words.json"
import style from "./slider.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft,faCircleRight } from '@fortawesome/free-solid-svg-icons';  //импортируем компонент Card, массив с данными для карточек, стили


function Slider(){ //создаем компонент Slider
    

    const [translated, setTranslated] = useState (true); //создаем состояние для кнопки перевода
    const [count, setCount] = useState (0) //получаем индекс объекта массива, чтобы получить нужный нам объект, изначальный индекс 0
    const [cardCount, setCardCount] = useState (0) //задаем состояние для подсчета изученных карточек
    const {words} = useContext(MyContext) 

    
    const object = words[count] //создаем переменную для объекта массива
    

    function handleClickCount (){ //создаем функцию для подсчета изученных карточек
        setCardCount(cardCount + 1);
    }  

    function showTranslation () { //создаем функцию, которая сработает при нажатии на кнопку перевода
        setTranslated(false); //изменить translated на false
        handleClickCount ();  
    }

  

    function handleClickPrev() {
        let copyCount = count;
        if (copyCount === 0) {
          setCount(words.length - 1);
        } else {
          setCount(copyCount - 1);
        }
        setTranslated(true);
      }
      
      function handleClickNext() {
        let copyCount = count;
        if (copyCount === words.length - 1) {
          setCount(0);
        } else {
          setCount(copyCount + 1);
        }
        setTranslated(true);
      }
    

if (!words){ // если массив не был передан, то высвечивается сообщение о загрузке
    return <h1>loading</h1>
}


    return ( 
        <div>
        <div className={style.slider}>
         <button className={style.button_prev} onClick={handleClickPrev}><FontAwesomeIcon icon={faCircleLeft} /></button> 
        <Card 
        english = {object.english}
        transcription = {object.transcription}
        russian = {object.russian}
        index = {object.index}
        key = {object.index}
        translated = {translated}
        showTranslation = {showTranslation}
        
        />
    <button className={style.button_next} onClick={handleClickNext}><FontAwesomeIcon icon={faCircleRight} /></button>
    
       </div>
       <div className={style.text}>Cards studied: {cardCount}</div>
       </div>
       
        
    )
}

export default Slider;
