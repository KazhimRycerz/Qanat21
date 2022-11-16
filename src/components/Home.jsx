//import { NavLink } from 'react-router-dom'
import './Home.scss'
import Qanat_Logo from '../Images/Qanat21_Logo_Q.png'
import Qanat_Logo_Schriftzug from '../Images/Qanat_Schriftzug.png'


const Home = () => (
    <div className="bg">
      <h1>Hier entsteht die Qanat21 Webseite</h1>
      {/* <p id= "logolang">qanat21</p> */}
      {/* <p id="logo">Q</p> */}
      <img id="QanatSchriftzug" src={Qanat_Logo_Schriftzug} alt="" />
      <img src={Qanat_Logo} alt="" />
     
    </div>
)

    export default Home