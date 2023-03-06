//import { NavLink } from 'react-router-dom'
import './TheSystem.scss';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import qanatimg from "../Images/qanatimg.jpg"


const Home = () => (
    <div className="bg">
     <Header />
        <div id="systembg1">
          <div id="firstoption">
            <div>
              <h2>Das System</h2>
              <p>Ein 5000 Jahre altes System plus modernes digitales Management...</p>
            </div>
            <img src={qanatimg} alt="" />
          </div> 
        </div>

      <Footer />
    </div>
)

    export default Home