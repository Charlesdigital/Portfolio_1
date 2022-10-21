import { Link } from 'react-router-dom'
import "./navbar.css";
import { FaBars } from 'react-icons/fa'
// import LogoC from './assets/icons/c.svg'
import Logo from '../../assets/icons/celogo.png'

function Navbar() {
// const [nav, setNav] = useState(false)
// const handleClick = () => setNav(!nav)
  return (
<div>
<nav>
        {/* <Link className='logo' to='/'>
          <img src = {LogoC} alt="logo" />
        </Link> */}
        {/* <Link className='logo' to='/'>
          <img src = {test} alt="logo" />
        </Link> */}

        <img class="top-logo" src = {Logo} alt="logo" />
        <div>
<ul class="list">
        <li class="menu">Home</li>
        <li class="menu">About</li>
        <li class="menu">Tech Stack</li>
        <li class="menu">Projects</li>
        <li class="menu">Contact</li>
        </ul>
        </div>
</nav>
{/* hamburger */}
<div>
<FaBars/>
</div>

{/* Mobile view */}
{/* <ul className = {!nav ? 'hidden' : }> */}

</div>
  )
}

export default Navbar

// Nav
//tech stack
//prokects
//contact me



