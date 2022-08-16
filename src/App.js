import { useState} from "react";
import axios from 'axios';
import './App.css';
import Navbar from "./components/navbar.jsx";
// import network from "./components/network.jsx";

import Emails from "./components/emails.jsx";



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
     setCounter( prevCounter => prevCounter - 1 )
     setCounter( prevCounter => prevCounter - 1 )
    network()

  }

  return (
    <div className="App">
    <Navbar/>
    <button onClick = {decAmount}>
      {counter}
    </button>
    <Emails
    name = {state.name}
    email = {state.email}
    />
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


{/* <Emails props = {state}/>
    <div>
      {state.map( x => (
        <div>
        {x}
    </div>

      )} */}