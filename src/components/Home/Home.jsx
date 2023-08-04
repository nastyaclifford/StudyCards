import Header from "../Header/Header"
import Table from "../Table/Table"
import Slider from "../Slider/Slider"
import style from "./home.module.scss"

function Home(){
 
    return (
        <div className={style.container}>
        <Header />
        <Table/>
        <Slider/>
        </div>
        
    )
}

export default Home;