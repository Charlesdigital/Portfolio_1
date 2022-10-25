import {useState} from 'react';
import { Link } from 'react-router-dom'
import "./navbar.css";
import { FaBars, FaTimes, FaToggleOff } from 'react-icons/fa'
// import LogoC from './assets/icons/c.svg'
import Logo from '../../assets/icons/celogo.png'

function Navbar() {
const [nav, setNav] = useState(false)
const handleClick = () => setNav(!nav)
  return (
<div>
        {/* <Link classNameName='logo' to='/'>
          <img src = {LogoC} alt="logo" />
        </Link> */}
        {/* <Link classNameName='logo' to='/'>
          <img src = {test} alt="logo" />
        </Link> */}
        <div className= "nav">

        <img className="top-logo" src = {Logo} alt="logo" />
        <div>
<ul className="list">
        <li className="menu">Home</li>
        <li className="menu">About</li>
        <li className="menu">Tech Stack</li>
        <li className="menu">Projects</li>
        <li className="menu">Contact</li>
        </ul>
        </div>
        <div onClick = {handleClick} className= "burger">
          {!nav ? <FaBars/> : <FaTimes />}
</div>
        </div>

{/* hamburger */}


{/* Mobile view */}
<ul onClick = {handleClick} className= {!nav ? "nopop" : "pop"}>
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



