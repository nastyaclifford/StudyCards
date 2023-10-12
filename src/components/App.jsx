import {
    BrowserRouter as Router, Routes, NavLink, Route
} from 'react-router-dom'
import { Home, Notfound, Slider, Table} from "../pages/index"
import "../styles/App.scss" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faHandSparkles } from '@fortawesome/free-solid-svg-icons'; 

function App() {
  return (
    <div className="container">
    <Router>
        <header className="header">
                < div className= "logo">
                    <FontAwesomeIcon icon={faHandSparkles} />
                </div>
                <nav className="nav">
                    <NavLink className="item" href=" " to="about">About</NavLink> 
                    <NavLink className="item" href=" " to="startpractising">Start Practicing</NavLink> 
                    <NavLink className="item" href=" " to="allwords">All Words</NavLink> 
                    <NavLink className="item" href=" " to="additional">Additional</NavLink>
                </nav>
    <div className="login">
        <div className="button"><FontAwesomeIcon icon={faRightToBracket} /> </div>
            </div>
            </header>
       <main>
      <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="about" element={<Home/>}/>
    <Route path="startpractising" element={<Slider/>}/>
    <Route path="allwords" element={<Table/>}/>
   
    <Route path="*" element={<Notfound />} />
       </Routes>
       </main>
       <footer></footer>
       </ Router>
    
    
            </div>)
}

export default App;
