import style from './card.module.scss'
import { useState } from 'react';

export default function Card(props) {

    const { english, transcription, russian} = props;
    const [translated, setTranslated] = useState (true);


    function showTranslation () {
        setTranslated(!translated)
    }

   
    return(
        <div>
                <div className={style.col}>
                    <div className={style.row}>{english}</div>
                    <div className={style.row}>{transcription}</div>
                    <div className={style.row}>
                        {translated === true ? <button onClick={showTranslation} className={style.button_show}>Show translation</button> : <div onClick={showTranslation} className={style.row}>{russian}</div>}
                        
                    </div>
                </div>  
                </div>
               
    )
}