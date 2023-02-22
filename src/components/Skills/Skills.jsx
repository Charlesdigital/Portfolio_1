import "./skills.css";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";
import javascript from "../../assets/icons/javascript.svg";
import react from "../../assets/icons/react.svg";
import postgres from "../../assets/icons/postgres.svg";
import notion from "../../assets/icons/notion.svg";
import rest from "../../assets/icons/rest.svg";
import figma from "../../assets/icons/figma.svg";

function Skills() {
  return (
    <div className="Skills">
      <h2 className="skill-title"> Skills</h2>
      <p>Technologies I've worked with:</p>
      <div className="skillContainer">
        <ul className="skill-list">
          <li>
            <img className="skill-icons" src={html} alt="logo" />
            <span>HTML </span>
          </li>

          <li>
            <img className="skill-icons" src={css} alt="logo" />
            <span>CSS</span>
          </li>

          <li>
            <img className="skill-icons" src={javascript} alt="logo" />
            <span>JAVASCRIPT</span>
          </li>

          <li>
            <img className="skill-icons" src={react} alt="logo" />
            <span>REACT</span>
          </li>

          <li>
            <img className="skill-icons" src={postgres} alt="logo" />
            <span>POSTGRES</span>
          </li>

          <li>
            <img className="skill-icons" src={rest} alt="logo" />
            <span>REST API </span>
          </li>

          <li>
            <img className="skill-icons" src={notion} alt="logo" />
            <span>NOTION</span>
          </li>

          <li>
            <img className="skill-icons" src={figma} alt="logo" />
            <span>FIGMA</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
