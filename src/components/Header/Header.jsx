import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {

  return (
    <>
        <nav className="header">
          <ul>
            <li><NavLink to="/home"> <p>zum ursprung</p> </NavLink></li>
            {/* <li><NavLink to="/about"> <p>about</p> </NavLink></li> */}
            <li><NavLink to="/thesystem"> <p>das system</p> </NavLink></li>
            <li><NavLink to="/thegoal"> <p>die aufgabe</p> </NavLink></li>
            <li><NavLink to="/theteam"> <p>das team</p> </NavLink></li>
            <li><NavLink to="/home"> <p>kontakt</p> </NavLink> </li>
          </ul>
            <p>Q</p>  
          
        </nav>
    </>
  )
}

export default Header
