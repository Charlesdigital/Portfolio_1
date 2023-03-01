import { useState, useRef } from "react";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-scroll";
function Navbar() {
  const navRef = useRef();

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div className="container">
      <nav className="nav" ref={navRef}>
        <ul className="list">
          <li className="menu">
            <Link to="homeHeader" smooth={true} duration={500}>
              Home
            </Link>
          </li>

          <li className="menu">
            <Link to="about-info" smooth={true} duration={500}>
              About
            </Link>
          </li>

          <li className="menu">
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>

          <li className="menu">
            <Link to="Skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>

          <li className="menu">
            <Link className="contact" to="box" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

// className="mobile-list"
// onClick={handleClick}
// className={!nav ? "hide-menu" : "show-menu"}

// import { useState } from "react";
// import "./navbar.css";
// import CE from "../../assets/icons/CE.png";
// import { Link } from "react-scroll";

// function Navbar() {
//   const [nav, setNav] = useState(false);
//   const handleClick = () => setNav(!nav);

//   return (
//     <nav className="nav">
//       <div className="container">
//         <div className="logo-container">
//           <img className="top-logo" src={CE} alt="logo" />
//         </div>

//         {/* Desktop view */}
//         <ul className="desktop-list">
//           <li>
//             <Link to="homeContainer" smooth={true} duration={500}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="about-info" smooth={true} duration={500}>
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="Skills" smooth={true} duration={500}>
//               Skills
//             </Link>
//           </li>
//           <li>
//             <Link to="projects" smooth={true} duration={500}>
//               Projects
//             </Link>
//           </li>
//           <li>
//             <Link to="box" smooth={true} duration={500}>
//               Contact
//             </Link>
//           </li>
//         </ul>

//         {/* Hamburger button for mobile view */}
//         <button className="hamburger" onClick={handleClick}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </button>

//         {/* Mobile view */}
//         <ul className={`mobile-list ${nav ? "show-menu" : ""}`}>
//           <li>
//             <Link to="homeContainer" smooth={true} duration={500} onClick={handleClick}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="about-info" smooth={true} duration={500} onClick={handleClick}>
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="Skills" smooth={true} duration={500} onClick={handleClick}>
//               Skills
//             </Link>
//           </li>
//           <li>
//             <Link to="projects" smooth={true} duration={500} onClick={handleClick}>
//               Projects
//             </Link>
//           </li>
//           <li>
//             <Link to="box" smooth={true} duration={500} onClick={handleClick}>
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
