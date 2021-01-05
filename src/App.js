import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";

// import { MemoryRouter, Switch, Route} from "react-router-dom";
// import 
import Navi from "./Components/Nav";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Demos from "./Pages/Demos";
import RecentWork from "./Pages/RecentWork";
import Testimonials from "./Pages/Testimonials";

function App() {
  return (
<Router>
  <div className="App">
    <Navi/>
    <Switch>
      <Route exact path={["/#", "/", "/home"]}>
        <Home/>
      </Route>
      <Route exact path="/contact">
        <Contact/>
      </Route>
      <Route exact path="/demos">
        <Demos/>
      </Route>
      <Route exact path="/recentWork">
        <RecentWork/>
      </Route>
      <Route exact path="/testimonials">
        <Testimonials/>
      </Route>
      <Route>
        <Home/>
      </Route>
    </Switch>
  </div>
</Router>

  );
}

export default App;
