import "./projects.css";

function Projects() {
  return (
    <section className="projects">
      <div className="projectContainer">
        <h1 className="text">Yo Low Trips</h1>
        <p className="text"> A full stack application to find flight deals</p>
        <ul className="technologies">
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
        <h1 className="text">Wiki Maps</h1>
        <p className="text"> A full stack application to help find food places </p>
        <ul className="technologies">
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
        <h1 className="text">Scheduler</h1>
        <p className="text"> An application to help with scheduling</p>
        <ul className="technologies">
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
