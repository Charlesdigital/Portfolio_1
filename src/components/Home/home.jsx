import React from "react";
import "./home.css";
import { Link } from "react-scroll";

function home() {
  return (
    <header className="homeHeader">
      <div className="homeContainer">
        <h1 classname="header">
          Hello, my name is Charles Easton, A Full Stack Developer.
        </h1>
        <p class="subtitle">
          Welcome to my website!
        </p>

        <div className="button-1">
          <button className="button-1">
            <Link to="projects" smooth={true} duration={500}>
              View My Projects
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
}

export default home;
