//import { NavLink } from 'react-router-dom'
import './TheTeam.scss'
import Header from '../components/Header/Header.jsx'
import { FooterBlue }  from '../components/Footer/Footer.jsx'
import team from '../Images/QanatTeamGuide.JPG'


const Home = () => (
    <div>
     { <Header />}
        <div className="bg1" >
          <div className="firstoption" id="team">
            <div>
              <h2>Projektteam Abteilung Q:</h2>
              <p> <h3>Initiatorin und Leitung:</h3> 	
              Kazhal Akbari, Elektroingenieurin, BSc, Master-Student an der Universität Duisburg-Essen</p> 
              <p><h3>Team:</h3> 	Fariba Akbari, Bauingenieurin, BSc</p>
              <p>Ebrahim Salimi, Bauingenieur, BSc, Master-Student an der Universität Duisburg-Essen</p>
              <p>Joachim Ritter, Strategist, Journalist, Webdeveloper</p>
            </div>
            <img id="teamimage" src={team} alt=""/>
          </div> 
        </div>
        <FooterBlue />
      
      
     
    </div>
)

    export default Home