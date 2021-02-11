import React from "react";
import loadable from '@loadable/component';
import './App.css';
import Home from "./Pages/Home";
import HeroImage from "./Components/HeroImage";
import {
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";
import TopNav from "./Components/Nav";



const Contact = loadable(() => import ("./Pages/Contact"));
// import Contact from "./Pages/Contact";
const Demos = loadable(() => import ("./Pages/Demos"));
//import Demos from "./Pages/Demos";
const AudioBooks = loadable(() => import ("./Pages/AudioBooks"));
// import RecentWork from "./Pages/RecentWork";
const Testimonials = loadable(() => import ("./Pages/Testimonials"));
//import Testimonials from "./Pages/Testimonials";
//const Herro = loadable(()=> import ("./Components/HeroImage"));

function App() {
  return (
<HashRouter basename="/">
  <div className="App">
    <TopNav/>
    <Switch>
      <Route exact path="/">
        <HeroImage/>
        <AudioBooks/>
      </Route>
      <Route exact path="/contact">
        <Contact/>
      </Route>
      <Route exact path="/demos">
        <Demos/>
      </Route>
      <Route exact path="/audiobooks">
        <AudioBooks/>
      </Route>
      <Route exact path="/testimonials">
        <Testimonials/>
      </Route>
      <Route>
        <Home/>
      </Route>
    </Switch>
  </div>
</HashRouter>

  );
}

export default App;