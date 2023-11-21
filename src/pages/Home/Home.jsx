import style from "../Home/home.module.scss" 

function Home(){ 
    return (
<div className={style.container}>
<h1 className={style.intro}>Welcome to Simple!</h1>
<div className={style.text}>With us you can forget about trying to cram new words into your head. Enjoy our memory game and learn a language SIMPLE while having fun!</div>
        </div>
)
}

export default Home;

