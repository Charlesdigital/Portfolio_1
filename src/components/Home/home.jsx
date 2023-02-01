import React from 'react'
import "./home.css";
import { SlEmotsmile } from "react-icons/sl";
import {Link} from 'react-scroll';


function home() {
  return (
    <div className="homeContainer">
<h1 classname="header">Hello, my name is Charles Easton, A Full Stack Developer.</h1>
<p class="subtitle">Welcome to my website! <SlEmotsmile /></p>

<div className="button-1">
<button className="button-1">
        <Link  to="projects" smooth={true} duration={500}>
        View My Projects
        </Link>
        </button>
        </div>
</div>
  )
}

export default home