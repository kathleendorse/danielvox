import React from "react";
import './App.css';
import TopNav from "./Components/Nav";
import Sections from "./Pages/Test";
import {Container} from 'react-bootstrap';

function App(){
  return (
    <div className="app">

      <TopNav/>
      <Sections/>

    </div>
  );
}
  
export default App;
