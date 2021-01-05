import React from "react";
import loadable from '@loadable/component';
import './App.css';
import {
//  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";
import Navi from "./Components/Nav";
//const Home = loadable(() => import ("./Pages/Home"));
import Home from "./Pages/Home";
const Contact = loadable(() => import ("./Pages/Contact"));
// import Contact from "./Pages/Contact";
const Demos = loadable(() => import ("./Pages/Demos"));
//import Demos from "./Pages/Demos";
const RecentWork = loadable(() => import ("./Pages/RecentWork"));
// import RecentWork from "./Pages/RecentWork";
const Testimonials = loadable(() => import ("./Pages/Testimonials"));
//import Testimonials from "./Pages/Testimonials";

function App() {
  return (
<HashRouter basename="/">
  <div className="App">
    <Navi/>
    <Switch>
      <Route exact path={["/#", "/"]}>
        <Home/>
      </Route>
      <Route exact path="/danielvox/#/contact">
        <Contact/>
      </Route>
      <Route exact path="/danielvox/#/demos">
        <Demos/>
      </Route>
      <Route exact path="/danielvox/#/recentWork">
        <RecentWork/>
      </Route>
      <Route exact path="/danielvox/#/testimonials">
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
