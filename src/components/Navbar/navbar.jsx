import {useState} from 'react';
import "./navbar.css";
import { FaBars, FaTimes, FaToggleOff } from 'react-icons/fa'
// import LogoC from './assets/icons/c.svg'
import Logo from '../../assets/icons/celogo.png'
import {Link} from 'react-scroll';
function Navbar() {
const [nav, setNav] = useState(false)
const handleClick = () => setNav(!nav)
  return (
<div>

        <div className= "nav">

        <img className="top-logo" src = {Logo} alt="logo" />
        <div>
<ul className="list">
        <li className="menu">
        <Link  to="box" smooth={true} duration={500}>
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
        Contacts
        </Link>
        </li>

        </ul>
        </div>
        <div onClick = {handleClick} className= "burger">
          {!nav ? <FaBars /> : <FaTimes />}
</div>
        </div>

{/* hamburger */}


{/* Mobile view */}
<ul onClick = {handleClick} className= {!nav ? "hide-menu" : "show-menu"}>
<li className="menu">
        <Link  to="box" smooth={true} duration={500}>
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
        Contacts
        </Link>
        </li>
        </ul>
</div>
  )
}

export default Navbar

// Nav
//tech stack
//prokects
//contact me



