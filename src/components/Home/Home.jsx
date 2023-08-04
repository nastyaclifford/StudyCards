import Header from "../Header/Header"
import Table from "../Table/Table"
import Slider from "../Slider/Slider"
import style from "./home.module.scss" //импортируем компоненты и стили

function Home(){ //создаем компонент Home и подключаем к нему компоненты Header,Table,Slider
 
    return (
        <div className={style.container}>
        <Header />
        <Table/>
        <Slider/>
        </div>
        
    )
}

export default Home;