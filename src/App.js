// import { useState} from "react";
// import axios from 'axios';
import './App.scss';
import Navbar from "./components/Navbar/navbar.jsx";
import Projects from "./components/Projects/projects.jsx";
import Contactform from "./components/Contactform/contactform.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Home from "./components/Home/home.jsx";


function App() {

  // function network() {
  //   axios.get(`https://gorest.co.in/public/v2/users`).then((res) => {
  //         // setState(res.data)
  //         console.log(res.data)
  //         setState(res.data)
  //         })
  //         console.log("test1", state)
  // }


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




