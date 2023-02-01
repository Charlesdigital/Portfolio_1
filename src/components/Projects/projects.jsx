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
        <img className="gif" src = {YLT} alt="logo" />

        <ul className="technologies">
          <li className="tech">HTML5</li>
          <li className="tech">Javascript</li>
          <li className="tech">React</li>
          <li className="tech">Postgres</li>
          <a href="https://rapidapi.com/ai-box-ai-box-default/api/flight-data4/" className="tech" target="_blank" rel="noopener noreferrer">Flight Data API</a>

        </ul>
        <ul className="links">
          {/* <a href="https://hotartistapp.netlify.app/" target="_blank" rel="noopener noreferrer">
            Live
          </a> */}
          <a
            href="https://github.com/Charlesdigital/Yo-Low-Trips"
            target="_blank"
          >
            Source Code
          </a>
        </ul>
      </div>

      <div className="projectContainer">
        <h2 className="text">Wiki Maps</h2>
        <p className="text"> A full stack application to help find and save food places </p>
        <img className="gif" src = {WikiMaps} alt="logo" />

        <ul className="technologies">
          <li className="tech">HTML5</li>
          <li className="tech">Javascript</li>
          <li className="tech">CSS</li>
          <li className="tech">Postgres</li>
          <a href="https://rapidapi.com/ai-box-ai-box-default/api/flight-data4/" className="tech" target="_blank" rel="noopener noreferrer">Google Map API</a>
        </ul>
        <ul className="links">
          {/* <a href="https://hotartistapp.netlify.app/" target="_blank" rel="noopener noreferrer">
            Live
          </a> */}
          <a href="https://github.com/araff-16/Wiki-Maps/tree/master">Source Code</a>
        </ul>
      </div>

      <div className="projectContainer">
        <h2 className="text">Scheduler</h2>
        <p className="text"> An application to help with scheduling</p>
        <img className="gif" src = {Scheduler} alt="logo" />
        <ul className="technologies">
          <li className="tech">HTML5</li>
          <li className="tech">Javascript</li>
          <li className="tech">React</li>
        </ul>
        <ul className="links">
        {/* <a href="https://hotartistapp.netlify.app/" target="_blank">
          Live
        </a> */}
        <a href="https://github.com/Charlesdigital/scheduler" target="_blank" rel="noopener noreferrer">
          Source Code
        </a>
        </ul>
      </div>
    </section>
  );
}
export default Projects;
