import "animate.css";
import "./home.css";
import "./media-queries.css";
import { Element } from "react-scroll";

const Home = ({ sectionRef }) => {
  return (
    <Element name="home">
      <div className="home" ref={sectionRef}>
        <div className="home-text-container">
          <div className="home-text-container-2">
            <h1 className="home-title animate__animated animate__bounceInLeft">
              HI, I AM <span className="highlight">SERGIO</span>
              <br />
              FULL-STACK DEVELOPER
            </h1>
            <h2 className="home-subtitle  animate__animated animate__fadeInUp animate__slower animate__delay-2s">
              Creating memorable digital experiences that connect the user with
              your brand
            </h2>
          </div>
        </div>
        <img
          src="/images/arrow.svg"
          alt="arrow icon"
          className="main-arrow-icon"
        />
      </div>
    </Element>
  );
};

export default Home;
