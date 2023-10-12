import { useEffect, useRef } from 'react'
import style from './card.module.scss'; 


export default function Card(props) {
    const { english, transcription, russian, translated, showTranslation} = props; 
    const buttonRef = useRef();

    useEffect (()=>{
        buttonRef.current.focus()
    }, [english])
   
    return( 
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