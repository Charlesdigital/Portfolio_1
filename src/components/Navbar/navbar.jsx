import {useState} from 'react';
import "./navbar.css";
import { FaBars, FaTimes } from 'react-icons/fa'
import CE from '../../assets/icons/CE.png'

import {Link} from 'react-scroll';
function Navbar() {

const [nav, setNav] = useState(false)
const handleClick = () => setNav(!nav)

  return (
<nav className="nav">
        {/* <div className= "navbar"> */}

<ul className="list">
<span>
        <img className="top-logo" src = {CE} alt="logo" />

        </span>
        <li className="menu">
        <Link  to="homeContainer" smooth={true} duration={500}>
                Home
        </Link>
        </li>

        <li className="menu">
        <Link  to="about-info" smooth={true} duration={500}>
                About
        </Link>
        </li>

        <li className="menu">
        <Link  to="Skills" smooth={true} duration={500}>
        Skills
        </Link>
        </li>

        <li className="menu">
        <Link  to="projects" smooth={true} duration={500}>
        Projects
        </Link>
        </li>

        <li className="menu">
        <Link  to="box" smooth={true} duration={500}>
        Contact
        </Link>

        </li>
        <div onClick = {handleClick} className= "burger">
          {!nav ? <FaBars size={50} /> : <FaTimes size={50}/>}
</div>
        </ul>
{/* <div className="socials">
<a href="https://www.linkedin.com/in/charles-easton1/" target="_blank" rel="noopener noreferrer" ><BsLinkedin size={50} color="#0072b1" /></a>
<a href="https://github.com/Charlesdigital" target="_blank" rel="noopener noreferrer"><BsGithub size={50} color="white" /></a>
</div> */}
        {/* </div> */}

{/* hamburger */}


{/* Mobile view */}
<ul className="list" onClick = {handleClick} className= {!nav ? "hide-menu" : "show-menu"}>
<li className="menu2">
        <Link  to="box" smooth={true} duration={500}>
                Home
        </Link>
        </li>

        <li className="menu2">
        <Link  to="about-info" smooth={true} duration={500}>
                About
        </Link>
        </li>

        <li className="menu2">
        <Link  to="Skills" smooth={true} duration={500}>
        Skills
        </Link>
        </li>

        <li className="menu2">
        <Link  to="projects" smooth={true} duration={500}>
        Projects
        </Link>
        </li>

        <li className="menu2">
        <Link  to="box" smooth={true} duration={500}>
        Contact
        </Link>
        </li>

        </ul>
</nav>
  )
}

export default Navbar




