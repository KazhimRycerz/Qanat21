//import { NavLink } from 'react-router-dom'
import './TheTeam.scss'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import team from '../Images/QanatTeamGuide.JPG'


const Home = () => (
    <div className="bg">
     { <Header />}
      
        <div id="bg1">
          <div id="teamFirstOption">
            <div>
              <h2>Projektteam Abteilung Q:</h2>
              <p> <h3>Initiatorin und Leitung:</h3> 	
              Kazhal Akbari, Elektroingenieurin, BA, Master-Student an der Universität Duisburg-Essen</p> 
              <p><h3>Team:</h3> 	Fariba Akbari, Bauingenieurin, BA</p>
              <p>Ebrahim Salimi, Bauingenieur, BA, Master-Student an der Universität Duisburg-Essen</p>
              <p>Joachim Ritter, Strategist, Journalist, Webdeveloper</p>
            </div>
            <img src={team} alt=""/>
          </div> 
        </div>
        <Footer />
      
      
     
    </div>
)

    export default Home