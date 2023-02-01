import { MdOutlineSportsTennis } from "react-icons/md"
import { MdOutlineElectricBike } from "react-icons/md";
import { GiWorld } from "react-icons/gi"
import "./about.css";
import me from '../../assets/me.png'

function About() {
  return (
    <div className="about-info">
            <h2 className="skill-title"> About Me </h2>

      <div className="content-inside">
        <img className="Charles" src = {me} alt="Charles" />
        <div className="summary">
    <div className="text-content">
    <p > I'm a Full-Stack Developer with a business background. My curiosity for continuous learning and tinkering with technology lead me to be a Developer through
    online resources. Experience working with large ERP solutions such as PeopleSoft and SAP in an accounting function. I enjoy learning the fundamentals of programming
    and breaking down business problems into code. </p>
    <p>During my spare time I enjoy cycling and exploring the city. <MdOutlineElectricBike /></p>
    <p>I enjoy travelling and experiencing new places. <GiWorld /></p>
    <p>Sports I play are: Squash, Volleyball, Badminton, Table Tennis <MdOutlineSportsTennis /></p>
    </div>
    </div>
    </div>
    </div>


  )
}

export default About