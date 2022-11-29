import {useState} from 'react';
import "./navbar.css";
import { FaBars, FaTimes, FaToggleOff } from 'react-icons/fa'
// import LogoC from './assets/icons/c.svg'
import Logo from '../../assets/icons/celogo.png'

function Navbar() {
const [nav, setNav] = useState(false)
const handleClick = () => setNav(!nav)
  return (
<div>

        <div className= "nav">

        <img className="top-logo" src = {Logo} alt="logo" />
        <div>
<ul className="list">
        <li className="menu">Home</li>
        <li className="menu">About</li>
        <li className="menu">Tech Stack</li>
        <li className="menu">Projects</li>
        <a href="Contactform/contactform.jsx" className="menu">Contact</a>
        </ul>
        </div>
        <div onClick = {handleClick} className= "burger">
          {!nav ? <FaBars /> : <FaTimes />}
</div>
        </div>

{/* hamburger */}


{/* Mobile view */}
<ul onClick = {handleClick} className= {!nav ? "hide-menu" : "show-menu"}>
        <li className="menu">Home</li>
        <li className="menu">About</li>
        <li className="menu">Tech Stack</li>
        <li className="menu">Projects</li>
        <li className="menu">Contact</li>
        </ul>
</div>
  )
}

export default Navbar

// Nav
//tech stack
//prokects
//contact me



