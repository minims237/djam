import "./App.css";
import Accueil from "./component/Accueil";
import Presentation from "./component/Presentation";
import Actualite from "./component/Actualite";
import Contact from "./component/Contact";
import logo from './assests/logo.png'
function App() {
 
  return (
    <div className="App">
      <div className="header__contener">
          <nav className='navbar'>
            <div href='#' className='nav-logo'>
              <img src={logo}  alt='logo'/>
             <p href='#'> DJAM</p>
              </div>
            <ul className='nav-menu'>
              <li className='nav-item'>
                <a href='#acceuil' className='nav-link'>Accueil</a>
              </li>
              <li className='nav-item'>
                <a href='#presentation' className='nav-link'>Presentation</a>
              </li>
              <li className='nav-item'><a href='#actualite' className='nav-link'>Actualite</a></li>
            <li className='nav-item'>
              <a href='#contact' className='nav-link'>Contact</a>
            </li>
            </ul>
            <button type='button'className='hamburger'>
              <span className='bar'></span>
              <span className='bar'></span>
              <span className='bar'></span>
            </button>
          </nav>
        </div>
      <div>
      <div id="acceuil">
        <Accueil />
      </div>
      <div id="presentation">
        <Presentation />
      </div>

      <div id="actualite">
        {" "}
        <Actualite />
      </div>

      <div id="contact">
        {" "}
        <Contact />
      </div>
      </div>
    </div>
  );
}

export default App;
