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
            {/* <div> */}
            <h2>Die unternehmerische Aufgabe</h2>
            {/* <ul>
              <li>Datenerhebung und Wetterprognosen</li>
              <li> Planungsansätze aus bestehenden Projekten</li>
              <li> Konkrete Lösung und erstes Projekt </li>
              <li> Umsetzung eines Referenzprojektes </li>
              <li> Wissenschaftlicher Nachweis der Funktionalität </li>
            </ul> */}
            {/* </div> */}
            <img id="goalimg" src={projektziel} alt="" />
          </div> 
        </div>

      <FooterBlue />
    </div>
)

export default Home