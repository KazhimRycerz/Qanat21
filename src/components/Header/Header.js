import "./Header.scss";
import { NavLink, Link } from "react-router-dom";

const Header = () => {

  return (
    <>
        <nav className="header">
          <ul>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
            <li>the team</li>
            <li>the system</li> 
          </ul>
            <p>Q</p>  
          
        </nav>
    </>
  )
}

export default Header
