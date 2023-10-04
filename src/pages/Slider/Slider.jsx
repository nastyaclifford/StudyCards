import {observer, inject} from "mobx-react";
import { useState } from 'react'
import Card from "../../components/Card/Card"
import style from "./slider.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft,faCircleRight } from '@fortawesome/free-solid-svg-icons';  //импортируем компонент Card, массив с данными для карточек, стили


const Slider = inject('wordStore') (observer(({wordStore})=>{
const [translated, setTranslated] = useState (true); //создаем состояние для кнопки перевода
const [count, setCount] = useState (0) //получаем индекс объекта массива, чтобы получить нужный нам объект, изначальный индекс 0
const [cardCount, setCardCount] = useState (0) //задаем состояние для подсчета изученных карточек

if (!wordStore.words && wordStore.words.length === 0) {
  return <h1>Loading...</h1>;
}; 
const object = wordStore.words && wordStore.words[count];

if (!object) {
  return <h1>Loading...</h1>;
}

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
      setCount(wordStore.words.length - 1);
    } else {
      setCount(copyCount - 1);
    }
    setTranslated(true);
  }
  
  function handleClickNext() {
    let copyCount = count;
    if (copyCount === wordStore.words.length - 1) {
      setCount(0);
    } else {
      setCount(copyCount + 1);
    }
    setTranslated(true);
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
})) 
    
    

export default Slider;
