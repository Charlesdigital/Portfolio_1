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
      <h1> Skills</h1>
    <p>Experience</p>
    <img className="top-logo" src = {html} alt="logo" />
    <img className="top-logo" src = {css} alt="logo" />
    <img className="top-logo" src = {javascript} alt="logo" />
    <img className="top-logo" src = {react} alt="logo" />
    <img className="top-logo" src = {postgres} alt="logo" />
    <img className="top-logo" src = {notion} alt="logo" />


    <p>Technologies I've worked with</p>
    </div>
  )
}

export default Skills