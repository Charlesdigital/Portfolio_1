import { MdOutlineSportsTennis } from "react-icons/md"
import { MdOutlineElectricBike } from "react-icons/md";
import { GiWorld } from "react-icons/gi"
import "./about.css";
import me from '../../assets/me.png'

function About() {
  return (
    <section className="about-info">
      <h2 className="skill-title"> About Me </h2>
      <div className="content-inside">
        <img className="charles" src={me} alt="Charles" />
        <div className="summary">
          <div className="text-content">
            <p className="text-me">
              I'm a Full-Stack Developer with a business background. My curiosity for continuous learning and tinkering with technology lead me to be a Developer. I have experience working with large ERP solutions such as PeopleSoft and SAP in an accounting function. I enjoy learning the fundamentals of programming and breaking down business problems into code.
            </p>
            
            <p className="text-me">
              During my spare time I enjoy cycling and exploring Toronto.
              <MdOutlineElectricBike />
            </p>
            
            <p className="text-me">
              I enjoy travelling and experiencing new places.
              <GiWorld />
            </p>
            
            <p className="text-me">
              Sports I play are: Squash, Volleyball, Badminton, Table Tennis
              <MdOutlineSportsTennis />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About