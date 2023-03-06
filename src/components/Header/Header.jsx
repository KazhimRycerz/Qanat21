import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {

  return (
    <>
        <nav className="header">
          <ul>
            <li><NavLink to="/home"> <p>home</p> </NavLink></li>
            {/* <li><NavLink to="/about"> <p>about</p> </NavLink></li> */}
            <li><NavLink to="/thesystem"> <p>the system</p> </NavLink></li>
            <li><NavLink to="/thegoal"> <p>the goal</p> </NavLink></li>
            <li><NavLink to="/theteam"> <p>the team</p> </NavLink></li>
            <li><NavLink to="/home"> <p>contact</p> </NavLink> </li>
          </ul>
            <p>Q</p>  
          
        </nav>
    </>
  )
}

export default Header
