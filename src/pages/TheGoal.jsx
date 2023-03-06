//import { NavLink } from 'react-router-dom'
import './TheGoal.scss';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import projektziel from "../Images/Qanat_Projektziele.png"


const Home = () => (
    <div className="bg">
     <Header />
        <div id="goalbg1">
          <div id="firstoption">
            <h2>Das Ziel</h2>
            <img src={projektziel} alt="" />
          </div> 
        </div>

      <Footer />
    </div>
)

    export default Home