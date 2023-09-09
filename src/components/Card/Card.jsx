import { useEffect, useRef } from 'react'
import style from './card.module.scss'; //подключаем стили, состояние useState


export default function Card(props) { //создаем компонент Card
    const { english, transcription, russian, translated, showTranslation} = props; //обращаемся к пропсам, которые находятся в компоненте Slider
    
    const buttonRef = useRef();

    useEffect (()=>{
        buttonRef.current.focus()
    }, [english])
   
    return( //возвращаем разметку для карточки, вставляем значения из пропсов, добавляем обработчик события onclick кнопке и условия показа перевода
        <div>
                <div className={style.col}>
                    <div className={style.row}>{english}</div>
                    <div className={style.row}>{transcription}</div>
                    <div className={style.row}>
                        {translated === true ? <button onClick={showTranslation} ref={buttonRef} className={style.button_show}>Show translation</button> : <div className={style.row}>{russian}</div>} 
                    </div>
                </div>  
                </div>
               
    )
}