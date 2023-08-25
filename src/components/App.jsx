import Table from "./Table/Table"
import Slider from "./Slider/Slider"
import Home from "./Home/Home"
import Notfound from "./Notfound/Notfound"
import "../styles/App.scss" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faHandSparkles } from '@fortawesome/free-solid-svg-icons'; //импортируем нужные нам иконки
import {
    BrowserRouter, Routes,Link, Route
} from 'react-router-dom';//импортируем компоненты и стили

function App() {
  return (
    <div className="container">
    <BrowserRouter>
    <div className="header">
                < div className= "logo">
                    <FontAwesomeIcon icon={faHandSparkles} />
                </div>
                <nav className="nav">
                    <Link className="item" href=" " to="about">About</Link> 
                    <Link className="item" href=" " to="startpractising">Start Practising</Link> 
                    <Link className="item" href=" " to="allwords">All Words</Link> 
                    <Link className="item" href=" " to="additional">Additional</Link>
                </nav>
    <div className="login">
        <div className="button"><FontAwesomeIcon icon={faRightToBracket} /> </div>
            </div>
            </div>
       
      <Routes>
    <Route path="startpractising" element={<Slider/>}/>
    <Route path="allwords" element={<Table/>}/>
    <Route path="about" element={<Home/>}/>
    <Route path="*" element={<Notfound />} />
       </Routes>
       </ BrowserRouter>
    
    
            </div>)
}

export default App;
