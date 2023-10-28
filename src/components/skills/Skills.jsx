import "./skills.css";
import "./media-queries.css";
import { Element } from "react-scroll";
import React, { useState } from "react";
import { useRef } from "react";
import useScrollReveal from "../../hooks/useScroll-reveal";

const Skills = () => {
  const [menuOptions, setMenuOptions] = useState([
    { id: 1, label: "Frontend ", value: "frontend" },
    { id: 2, label: "Backend ", value: "backend" },
    { id: 3, label: "Tools", value: "tools" },
  ]);
  const [selectedOption, setSelectedOption] = useState(menuOptions[0]);
  const [skills, setSkills] = useState({
    frontend: [
      { name: "HTML", link: "/images/html.svg" },
      { name: "CSS", link: "/images/css.svg" },
      { name: "JAVASCRIPT", link: "/images/js.svg" },
      { name: "REACT", link: "/images/react.svg" },
      { name: "TAILWIND", link: "/images/tailwind.svg" },
    ],
    backend: [
      { name: "NODE JS", link: "/images/node.svg" },
      { name: "EXPRESS", link: "/images/express.svg" },
      { name: "MONGODB", link: "/images/mongo.svg" },
    ],
    tools: [
      { name: "GIT", link: "/images/git.svg" },
      { name: "VITE", link: "/images/vite.svg" },
      { name: "VSCODE", link: "/images/vscode.webp" },
    ],
  });

  function handleOptionChange(option) {
    setSelectedOption(option);
  }

  const containerRef = useRef(null);
  const isVisibleC = useScrollReveal(containerRef);

  const skillsItemRef = useRef(null);
  const isVisibleI = useScrollReveal(skillsItemRef);

  return (
    <Element name="skills">
      <div className="skills" ref={containerRef}>
        <div className="skills-main-container">
          <h1
            className={`skills-title ${
              isVisibleC && "animate__animated animate__fadeInLeft"
            }`}
          >
            SKILLS
          </h1>
          <div
            className={`skills-container ${
              isVisibleC && "animate__animated animate__fadeInRightBig"
            }`}
          >
            <div className="skills-menu">
              <ul className="skill-menu-options" role="tablist">
                {menuOptions.map((option) => (
                  <li
                    key={option.id}
                    role="tab"
                    aria-selected={selectedOption.value === option.value}
                    className={`skill-menu-option ${
                      selectedOption.value === option.value ? "active" : ""
                    }
                    `}
                    onClick={() => handleOptionChange(option)}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="skills-content">
              <div className="skills-items">
                {skills[selectedOption.value].map((skill) => (
                  <div
                    key={skill.name}
                    className={`skills-item animate__animated animate__fadeIn animate__delay-2s
                    `}
                    ref={skillsItemRef}
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      src={skill.link}
                      alt={skill + "logo"}
                      className="skills-item-image"
                    />
                    <p className="skills-item-text">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Skills;
