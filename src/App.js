import { useState} from "react";
import axios from 'axios';
import './App.scss';
import Navbar from "./components/Navbar/navbar.jsx";
import Projects from "./components/Projects/projects.jsx";
import Contactform from "./components/Contactform/contactform.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";

// import network from "./components/network.jsx";




function App() {

  const [ state, setState ] = useState(["chicken", "fried", "freezer"])
  const [ counter, setCounter] = useState(5)

  function network() {
    axios.get(`https://gorest.co.in/public/v2/users`).then((res) => {
          // setState(res.data)
          console.log(res.data)
          setState(res.data)
          })
          console.log("test1", state)
  }

  function decAmount() {
     setCounter( prevCounter => prevCounter + 1 )
     setCounter( prevCounter => prevCounter - 1 )
    network()

  }

  return (
    <div className="App">
    <Navbar/>
    <About/>
    <Projects/>
    <Skills/>
    <Contactform/>
    </div>
  );
}

export default App;


// import React from 'react'
// import axios from 'axios'

// function network() {
//   return (
//     const [ state, setState ] = useState([])

//     axios.get(`https://gorest.co.in/public/v2/users`).then((res) => {
//         setState(res.data)
//         console.log(setState)
//         })
//   )
// }

// export default network


