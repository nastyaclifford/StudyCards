import Table from "../Table/Table"
import Slider from "../Slider/Slider"
import style from "./home.module.scss" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faHandSparkles } from '@fortawesome/free-solid-svg-icons'; //импортируем нужные нам иконки
import {
    BrowserRouter, Link, Route, Routes
} from 'react-router-dom';//импортируем компоненты и стили


function Home(){ //создаем компонент Home и подключаем к нему компоненты Header,Table,Slider
 
    return (
<BrowserRouter>
<div className={style.container}>
<div className={style.header}>
            < div className= {style.logo}>
                <FontAwesomeIcon icon={faHandSparkles} />
            </div>
            <nav className={style.nav}>
                <Link className={style.item} href=" " to="about">About</Link> 
                <Link className={style.item} href=" " to="startpractising">Start Practising</Link> 
                <Link className={style.item} href=" " to="allwords">All Words</Link> 
                <Link className={style.item} href=" " to="additional">Additional</Link>
            </nav>
<div className={style.login}>
    <div className={style.button}><FontAwesomeIcon icon={faRightToBracket} /> </div>


        </div></div>
        
        <Routes>
        <Route exact path="/" element={<Home/>}/>
<Route path="startpractising" element={<Slider/>}/>
<Route path="allwords" element={<Table/>}/>



   </Routes>

        </div>
        </BrowserRouter>
        
    )
}

export default Home;

