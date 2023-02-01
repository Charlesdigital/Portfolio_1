import "./skills.css";
import html from '../../assets/icons/html.svg'
import css from '../../assets/icons/css.svg'
import javascript from '../../assets/icons/javascript.svg'
import react from '../../assets/icons/react.svg'
import postgres from '../../assets/icons/postgres.svg'
import notion from '../../assets/icons/notion.svg'



function Skills() {
  return (
    <div className="Skills">
      <h2 className="skill-title"> Skills</h2>
    <p>Technologies I've worked with:</p>
    <div className="container">
    <div>
    <img className="skill-icons" src = {html} alt="logo" />
    <p>HTML</p>
    </div>

    <div>
    <img className="skill-icons" src = {css} alt="logo" />
    <p>CSS</p>
    </div>
    <div>
    <img className="skill-icons" src = {javascript} alt="logo" />

      <p>JAVASCRIPT</p>
    </div>

    <div>
    <img className="skill-icons" src = {react} alt="logo" />

      <p>REACT</p>
    </div>

    <div>
    <img className="skill-icons" src = {postgres} alt="logo" />

      <p>POSTGRES</p>
    </div>

    <div>
    <img className="skill-icons" src = {notion} alt="logo" />

      <p>NOTION</p>
    </div>

    </div>


    </div>
  )
}

export default Skills