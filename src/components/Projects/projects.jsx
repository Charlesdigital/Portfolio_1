import "./projects.css";
import YLT from '../../assets/Yo-Low-trips-demo.gif'
import WikiMaps from '../../assets/Wikimaps.gif'
import Scheduler from '../../assets/Scheduler.gif'


function Projects() {
  return (
    <section className="projects">
      <div className="projectContainer">
        <h2 className="text">Yo Low Trips</h2>
        <p className="text"> A full stack application to find flight deals</p>
        <ul className="technologies">
        <img className="gif" src = {YLT} alt="logo" />
          <li>HTML5</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Flight Data API</li>
        </ul>
        <ul className="links">
          <a href="https://hotartistapp.netlify.app/" target="_blank">
            Live
          </a>
          <a
            href="https://github.com/Charlesdigital/Yo-Low-Trips"
            target="_blank"
          >
            Repo
          </a>
        </ul>
      </div>

      <div className="projectContainer">
        <h2 className="text">Wiki Maps</h2>
        <p className="text"> A full stack application to help find food places </p>
        <ul className="technologies">
        <img className="gif" src = {WikiMaps} alt="logo" />
          <li>HTML5</li>
          <li>Javascript</li>
          <li>CSS</li>
          <li>Flight Data API</li>
        </ul>
        <ul className="links">
          <a href="https://hotartistapp.netlify.app/" target="_blank">
            Live
          </a>
          <a href="https://github.com/araff-16/Wiki-Maps/tree/master">Repo</a>
        </ul>
      </div>

      <div className="projectContainer">
        <h2 className="text">Scheduler</h2>
        <p className="text"> An application to help with scheduling</p>
        <ul className="technologies">
        <img className="gif" src = {Scheduler} alt="logo" />

          <li>HTML5</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Flight Data API</li>
        </ul>
        <ul className="links">
        <a href="https://hotartistapp.netlify.app/" target="_blank">
          Live
        </a>
        <a href="https://github.com/Charlesdigital/scheduler" target="_blank">
          Repo
        </a>
        </ul>
      </div>
    </section>
  );
}
export default Projects;
