import { Link } from "react-scroll";
import "./side-bar.css";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar-items">
        <Link
          to="home"
          activeClass="side-bar-item-active"
          spy={true}
          duration={300}
          className="side-bar-item side-bar-home"
        />
        <Link
          to="skills"
          spy={true}
          duration={300}
          activeClass="side-bar-item-active"
          className="side-bar-item side-bar-skills"
        />
        <Link
          to="works"
          activeClass="side-bar-item-active"
          spy={true}
          duration={300}
          className="side-bar-item side-bar-works"
        />
        <Link
          to="contact"
          activeClass="side-bar-item-active"
          spy={true}
          duration={300}
          className="side-bar-item side-bar-contact"
        />
      </div>
    </div>
  );
};

export default SideBar;
