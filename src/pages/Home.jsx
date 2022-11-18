//import { NavLink } from 'react-router-dom'
import './Home.scss'
import Qanat_Logo from '../Images/Qanat21_Logo_Q.png'
import Qanat_Logo_Schriftzug from '../Images/Qanat_Schriftzug.png'
import Header from '../components/Header/Header.js'


const Home = () => (
    <div className="bg">
      <Header />
      {/* <h1>Hier entsteht die Qanat21 Webseite</h1> */}
        <div id="secondoption">
          <p id="logolang2">qanat<em>21</em></p> 
          <p id="logoschrift2">Q</p> 
        </div> 
        <div id="firstoption">
          <p id="logolang">qanat<em>21</em></p>
          <p id="logoschrift">Q</p> 
        </div>
      {/* <img id="QanatSchriftzug" src={Qanat_Logo_Schriftzug} alt="" />
      <img id="QuanatLogo" src={Qanat_Logo} alt="" /> */}
      
     
    </div>
)

    export default Home