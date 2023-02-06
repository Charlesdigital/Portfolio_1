import './App.scss';
import Navbar from "./components/Navbar/navbar.jsx";
import Projects from "./components/Projects/projects.jsx";
import Contactform from "./components/Contactform/contactform.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Home from "./components/Home/home.jsx";


function App() {

  return (
    <div className="App">
    <Navbar/>
    <Home />
    <About/>
    <Projects/>
    <Skills/>  
    <Contactform/>
    </div>
  );
}

export default App;




