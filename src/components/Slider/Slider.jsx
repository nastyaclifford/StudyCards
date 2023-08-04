import Card from "../Card/Card"
import words from "../../data/words.json"
import style from "./slider.module.scss" //импортируем компонент Card, массив с данными для карточек, стили


function Slider(){ //создаем компонент Slider
    const i = Math.floor(Math.random() * words.length); //создаем переменную для рандомного индекса информации о карточке (объекта массива)
    const object = words[i]; //создаем переменную для рандомной карточки 

    return ( //возвращаем разметку и вызываем нужную нам информацию для компонента Card из объекта из массива
        <div className={style.slider}>
        
        <Card 
        english = {object.english}
        transcription = {object.transcription}
        russian = {object.russian}
        index = {object.index}
        key = {object.index}/>
    
       </div>
        
    )
}

export default Slider;
