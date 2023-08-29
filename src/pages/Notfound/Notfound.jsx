import style from "./notfound.module.scss"

function Notfound(){ //создаем компонент Home и подключаем к нему компоненты Header,Table,Slider
 
    return (

<div className={style.container}>
<h1 className={style.intro}>404</h1>
<div className={style.text}>Oops! It looks like you got lost!</div>
        </div>
    
        
    )
}

export default Notfound;