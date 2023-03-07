//import { NavLink } from 'react-router-dom'
import './TheSystem.scss';
import Header from '../components/Header/Header.jsx';
import { FooterBlue } from '../components/Footer/Footer.jsx';
import qanatimg from "../Images/qanatimg.jpg"


const Home = () => (
    <div>
     <Header />
        <div className="bg1" >
          <div className="firstoption" id="system">
            <div>
              <h2>Das System</h2>
              <p>Ein 5000 Jahre altes System plus modernes digitales Management...</p>
            </div>
            <img src={qanatimg} alt="" />
          </div> 
        </div>
      <FooterBlue />
    </div>
)

    export default Home