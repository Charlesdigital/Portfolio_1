import "./projects.css";
import Mortgagecalc from "../../assets/mortgagecalc.gif";
import YLT from "../../assets/Yo-Low-trips-demo.gif";
import WikiMaps from "../../assets/Wikimaps.gif";
import Scheduler from "../../assets/Scheduler.gif";
import Portfolio from "../../assets/portfolio.gif";

function Projects() {
  return (
    <div className="projects">
      <h2 className="skill-title"> Projects </h2>

      <div className="projectContainer">
        <h2 className="text">Mortgage Calculator</h2>
        <p className="text-project">
          {" "}
          A Mortgage Calculator with form valiadation
        </p>
        <img className="gif" src={Mortgagecalc} alt="logo" />

        <ul className="technologies">
          <li className="tech">HTML5</li>
          <li className="tech">CSS</li>
          <li className="tech">Javascript</li>
          <li className="tech">React</li>
        </ul>
        <ul className="links">
          <a
            href="https://github.com/Charlesdigital/Mortgage-Calculator"
            target="_blank"
          >
            <button className="project-button">Source Code</button>
          </a>
          <a
            href="https://mortgagecalculatorbreakdown.netlify.app/"
            target="_blank"
          >
            <button className="project-button">Live</button>
          </a>
        </ul>
      </div>
      <div className="projectContainer">
        <h2 className="text">Portfolio</h2>
        <p className="text-project"> This portfolio built with React</p>
        <img className="gif" src={Portfolio} alt="logo" />

        <ul className="technologies">
          <li className="tech">HTML5</li>
          <li className="tech">CSS</li>
          <li className="tech">Javascript</li>
          <li className="tech">React</li>
        </ul>
        <ul className="links">
          <a
            href="https://github.com/Charlesdigital/Portfolio_1"
            target="_blank"
          >
            <button className="project-button">Source Code</button>
          </a>
          <a
            href="https://mortgagecalculatorbreakdown.netlify.app/"
            target="_blank"
          >
            <button className="project-button">Live</button>
          </a>
        </ul>
      </div>
      <div className="projectContainer">
        <h2 className="text">Yo-Low Trips</h2>
        <p className="text-project">
          {" "}
          A full stack application to find flight deals
        </p>
        <img className="gif" src={YLT} alt="logo" />

        <ul className="technologies">
          <li className="tech">HTML5</li>
          <li className="tech">Javascript</li>
          <li className="tech">React</li>
          <li className="tech">Postgres</li>
          <a
            href="https://rapidapi.com/ai-box-ai-box-default/api/flight-data4/"
            className="tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flight Data API
          </a>
        </ul>
        <ul className="links">
          <a
            href="https://github.com/Charlesdigital/Yo-Low-Trips"
            target="_blank"
          >
            <button className="project-button">Source Code</button>
          </a>
        </ul>
      </div>

      <div className="projectContainer">
        <h2 className="text">Wiki Maps</h2>
        <p className="text-project">
          {" "}
          A full stack application to help find and save food places{" "}
        </p>
        <img className="gif" src={WikiMaps} alt="logo" />

        <ul className="technologies">
          <li className="tech">HTML5</li>
          <li className="tech">Javascript</li>
          <li className="tech">CSS</li>
          <li className="tech">Postgres</li>
          <a
            href="https://mapsplatform.google.com/solutions/display-the-ideal-location/"
            className="tech"
            target="_blank"
          >
            Google Map API
          </a>
        </ul>
        <ul className="links">
          <a
          href="https://github.com/Charlesdigital/Wiki-Maps"
          target="_blank"
          >
            <button className="project-button">Source Code</button>
          </a>
        </ul>
      </div>

      <div className="projectContainer">
        <h2 className="text">Scheduler</h2>
        <p className="text-project"> An application to help with scheduling</p>
        <img className="gif" src={Scheduler} alt="logo" />
        <ul className="technologies">
          <li className="tech">HTML5</li>
          <li className="tech">Javascript</li>
          <li className="tech">React</li>
        </ul>
        <ul className="links">
          <a
            href="https://github.com/Charlesdigital/scheduler"
            target="_blank"
          >
            <button className="project-button">Source Code</button>
          </a>
        </ul>
      </div>
    </div>
  );
}
export default Projects;
