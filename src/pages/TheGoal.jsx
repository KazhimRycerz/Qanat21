//import { NavLink } from 'react-router-dom'
import './TheGoal.scss';
import Header from '../components/Header/Header.jsx';
import { FooterBlue } from '../components/Footer/Footer.jsx';
import projektziel from "../Images/Qanat_Projektziele.png"


const Home = () => (
    <div className="page">
     <Header />
        <div className="bg1">
          <div className="firstoption" id="goal">
            <h2>Die unternehmerische Aufgabe</h2>
            <img id="goalimg" src={projektziel} alt="" />
          </div> 
        </div>

      <FooterBlue />
    </div>
)

export default Home