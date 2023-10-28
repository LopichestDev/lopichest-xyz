import "./nav.css";
import "./media-queries.css";
import "animate.css";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="navbar animate__animated animate__fadeInDown ">
      <ul className="nav-items">
        <li className="nav-item">
          <Link to="home" smooth={true} duration={300} className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="skills" smooth={true} duration={300} className="nav-link">
            Skills
          </Link>
        </li>
        <li className="nav-item">
          <Link to="works" smooth={true} duration={300} className="nav-link">
            Works
          </Link>
        </li>
        <li className="nav-item">
          <Link to="contact" smooth={true} duration={300} className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
