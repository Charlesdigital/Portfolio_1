// import { MdOutlineElectricBike, GiWorld, GiElectric } from 'react-icons/fa'
import { GiElectric } from "react-icons/gi";
import { MdOutlineElectricBike } from "react-icons/md";
import { GiWorld } from "react-icons/gi"
import "./about.css";

function About() {
  return (
    <div className="about-info">
    <p > A Full-Stack Developer with a business background. My curiosity for continuous learning and tinkering with technology lead me to be a Full-Stack Developer through
    online resources. Experience working with large ERP solutions such as PeopleSoft and SAP in an accounting function. I enjoy learning the fundamentals of programming
    and breaking down business problems into code. </p>
    <p>During my spare time I enjoy cycling and exploring the city. <MdOutlineElectricBike /></p>
    <p>I enjoy travelling around the world and experiencing new cultures. <GiWorld /></p>
    <p>I also enjoy all things electric! <GiElectric color= "yellow" /></p>
    </div>


  )
}

export default About