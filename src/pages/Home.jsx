import { Link } from 'react-router-dom'
import './Home.scss'
//import Qanat_Logo from '../Images/Qanat21_Logo_Q.png'
//import Qanat_Logo_Schriftzug from '../Images/Qanat_Schriftzug.png'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'


const Home = () => (
    <div className="bg">
     { <Header />}
      {/* <h1>Hier entsteht die Qanat21 Webseite</h1> */}
        <div id="bg1">
          <div id="firstoption">
            <p id="logolang">qanat<span>21</span></p> 
            <div id="centerTop">
              <p id="unterzeileBlue">Süsswassermanagement für eine gesicherte Zukunft</p>
              <p id="logoschrift">Q</p> 
              <p id="navOnPage">
                <ul>
                  <li><Link to="/home"> <p>home</p> </Link></li>
                  {/* <li><Link to="/about"> <p>about</p> </Link></li> */}
                  <li><Link to="/thesystem"> <p>the system</p> </Link></li>
                  <li><Link to="/thegoal"> <p>the goal</p> </Link></li>
                  <li><Link to="/theteam"> <p>the team</p> </Link></li>
                  <li><Link to="/home"> <p>contact</p> </Link> </li>
                </ul>
              </p>
            </div >
          </div> 
        </div>
        <div id="bg2">
          <div id="secondoption">
            <p id="logolang2">qanat<span>21</span></p>
            <p id="logoschrift2">Q</p> 
            <p id="unterzeileSand">Wassermanagement für eine gesicherte Zukunft</p>
          </div>
        </div>
        <Footer />
      {/* <img id="QanatSchriftzug" src={Qanat_Logo_Schriftzug} alt="" />
      <img id="QuanatLogo" src={Qanat_Logo} alt="" /> */}
      
     
    </div>
)

    export default Home