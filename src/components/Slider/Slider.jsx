import Card from "../Card/Card"
import words from "../../data/words.json"
import style from "./slider.module.scss"


function Slider(){
    const i = Math.floor(Math.random() * words.length);
    const object = words[i];

    return (
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
