import style from "./home.module.scss" 
//импортируем компоненты и стили


function Home(){ //создаем компонент Home и подключаем к нему компоненты Header,Table,Slider
 
    return (

<div className={style.container}>
<h1 className={style.intro}>Welcome to Simple! </h1>
<div className={style.text}>With us your can forget about trying to cram new words into your head. Enjoy our memory game and learn a language SIMPLE while having fun!</div>
        </div>
    
        
    )
}

export default Home;

