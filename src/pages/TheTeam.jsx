//import { NavLink } from 'react-router-dom'
import './TheTeam.scss'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'


const Home = () => (
    <div className="bg">
     { <Header />}
      
        <div id="bg1">
          <div id="teamFirstOption">
             <h2>Projektteam, Visionisten Abteilung Q:</h2>
             <p> <h3>Initiatorin und Leitung:</h3> 	
              Kazhal Akbari, Elektroingenieurin, BA, Master-Student an der Universität Duisburg-Essen</p> 
              <p><h3>Team:</h3> 	Fariba Akbari, Bauingenieurin, BA</p>
              <p>Ebrahim Salimi, Bauingenieur, BA, Master-Student an der Universität Duisburg-Essen</p>
              <p>Joachim Ritter, Strategist, Journalist, Webdeveloper</p>
          </div> 
        </div>
        <Footer />
      {/* <img id="QanatSchriftzug" src={Qanat_Logo_Schriftzug} alt="" />
      <img id="QuanatLogo" src={Qanat_Logo} alt="" /> */}
      
     
    </div>
)

    export default Home