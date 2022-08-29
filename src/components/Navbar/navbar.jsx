import { Link } from 'react-router-dom'
import "./navbar.css";
// import LogoC from './assets/icons/c.svg'
import test from '../../assets/icons/test.png'

function Navbar() {

  return (

<nav>
        {/* <Link className='logo' to='/'>
          <img src = {LogoC} alt="logo" />
        </Link> */}
        {/* <Link className='logo' to='/'>
          <img src = {test} alt="logo" />
        </Link> */}

        <img src = {test} alt="logo" />

        <span class="menu">Home</span>
        <span class="menu">About</span>
        <span class="menu">Tech Stack</span>
        <span class="menu">Projects</span>
        <span class="menu">Contact</span>
</nav>
  )
}

export default Navbar

// Nav
//tech stack
//prokects
//contact me



