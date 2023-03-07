import { Link } from 'react-router-dom'
import './Home.scss'
import Header from '../components/Header/Header.jsx'
import { FooterSand, FooterBlue } from '../components/Footer/Footer.jsx'


const Home = () => (
    <div id="page">
     <Header />
        <div className="bg1">
          <div className="firstoption">
            <p id="logolang">qanat<span>21</span></p> 
            <div id="centerTop">
              <p className="subtitel" id="unterzeileBlue">Süsswassermanagement für eine gesicherte Zukunft</p>
              <p id="logoschrift">Q</p> 
              <p id="navOnPage">
                <ul>
                  <li><Link to="/home"> <p>zum Ursprung</p> </Link></li>
                  {/* <li><Link to="/about"> <p>about</p> </Link></li> */}
                  <li><Link to="/thesystem"> <p>das System</p> </Link></li>
                  <li><Link to="/thegoal"> <p>die Aufgabe</p> </Link></li>
                  <li><Link to="/theteam"> <p>das Team</p> </Link></li>
                  <li><Link to="/home"> <p>Kontakt</p> </Link> </li>
                </ul>
              </p>
            </div >
          </div> 
        </div>
        {/* <div className="bg2">
          <div className="secondoption">
            <p id="logolang2">qanat<span>21</span></p>
            <p id="logoschrift2">Q</p> 
            <p className="subtitel" id="unterzeileSand">Süsswassermanagement für eine gesicherte Zukunft</p>
          </div>
        </div> */}
        <FooterBlue />      
     
    </div>
)

    export default Home