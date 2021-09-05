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

































// import loadable from '@loadable/component';

//import Home from "./Pages/Home";
// import HeroImage from "./Components/HeroImage";
// import {
//   HashRouter,
//   Route,
//   Switch,
// } from "react-router-dom";

// import Contact from "./Pages/Contact";
// import Demos from "./Pages/Demos";
// import AudioBooks from "./Pages/AudioBooks";
// import Testimonials from "./Pages/Testimonials";

// const Contact = loadable(() => import ("./Pages/Contact"));

//const Demos = loadable(() => import ("./Pages/Demos"));

//const AudioBooks = loadable(() => import ("./Pages/AudioBooks"));
//import RecentWork from "./Pages/RecentWork";
//const Testimonials = loadable(() => import ("./Pages/Testimonials"));
//import Testimonials from "./Pages/Testimonials";


// function App() {
//   return (
// <HashRouter basename="/">
//   <div className="App">
//     <TopNav/>
//     <Switch>
//       <Route exact path="/">
//         <div id="wrapper">
//         <HeroImage/>
//         <AudioBooks/>
//         </div>
//       </Route>
//       <Route exact path="/contact">
//         <Contact/>
//       </Route>
//       <Route exact path="/demos">
//         <Demos/>
//       </Route>
//       <Route exact path="/audiobooks">
//         <AudioBooks/>
//       </Route>
//       <Route exact path="/testimonials">
//         <Testimonials/>
//       </Route>
//       <Route>
//         {/* <Home/> */}
//       </Route>
//     </Switch>
//   </div>
// </HashRouter>)}

