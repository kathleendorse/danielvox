import React from "react";
import loadable from '@loadable/component';
import './App.css';
import Home from "./Pages/Home";
import HeroImage from "./Components/HeroImage";
// import iconFacebook from "./iconfacebook.png";
// import iconLinkedIn from "./iconlinkedin.png";
// import iconSoundcloud from "./iconsoundcloud.png";
// import iconTwitter from "./icontwitter.png";
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
const RecentWork = loadable(() => import ("./Pages/RecentWork"));
// import RecentWork from "./Pages/RecentWork";
const Testimonials = loadable(() => import ("./Pages/Testimonials"));
//import Testimonials from "./Pages/Testimonials";

function App() {
  return (
<HashRouter basename="/">
  <div className="App">
    <TopNav/>
    {/* <HeroImage
      imageSrc="https://res.cloudinary.com/katedorse/image/upload/v1609963430/pexels-freestocksorg-64057_ojmy2l.jpg"
		  color="#555555"
      gradientDirection="to bottom right"
      height="60vh"
      opacity="0.8"
      childrenStyles={{ color: '#fdf6e3' }}
      parallax
      textPosition="center"
	  >
		  <h1>THE VOICE YOU WANT TO LISTEN TO</h1>
      <a href="https://soundcloud.com/danielvox" target="_blank" rel="noreferrer noopener" aria-label="This is an external link to soundcloud (opens in a new tab)"><img  src={iconSoundcloud} alt="soundcloud"/></a>
      <a href="https://www.linkedin.com/in/daniel-dorse-b8b20046/" target="_blank" rel="noreferrer noopener" aria-label="This is an external link to linkedin (opens in a new tab)"><img  src={iconLinkedIn} alt="linkedin"/></a> 
      <a href="https://www.facebook.com/daniel.dorse/" target="_blank" rel="noreferrer noopener" aria-label="This is an external link to facebook (opens in a new tab)"><img  src={iconFacebook} alt="facebook"/></a>
      <a href="https://twitter.com/danielvox1" target="_blank" rel="noreferrer noopener" aria-label="This is an external link to twitter (opens in a new tab)"><img  src={iconTwitter} alt="twitter"/></a>
	  </HeroImage> */}
    <HeroImage/>
{/* 
	  </HeroImage> */}
    <Switch>
      <Route exact path="/">
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
</HashRouter>

  );
}

export default App;