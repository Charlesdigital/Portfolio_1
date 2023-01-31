import {useState} from 'react';
import "./navbar.css";
import { FaBars, FaTimes, FaToggleOff } from 'react-icons/fa'
// import LogoC from './assets/icons/c.svg'
import Logo from '../../assets/icons/celogo.png'
import {Link} from 'react-scroll';
function Navbar() {

const [nav, setNav] = useState(false)
const handleClick = () => setNav(!nav)
const [counter, setCounter] = useState(1)

  return (
<div className="nav">
        <div className= "navbar">
        <img className="top-logo" src = {Logo} alt="logo" />
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
        <div onClick = {handleClick} className= "burger">
          {!nav ? <FaBars size={50} /> : <FaTimes size={50}/>}
</div>
        </ul>
        </div>

{/* hamburger */}


{/* Mobile view */}
<ul className="BarIcon" onClick = {handleClick} className= {!nav ? "hide-menu" : "show-menu"}>
<h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
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



