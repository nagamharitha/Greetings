import React from "react";
import './App.css';
import Welcome from './Components/Welcome';

const App = () => {
  let name = "Haritha";
  return (
    <Welcome name={name} />
  )
}


export default App;