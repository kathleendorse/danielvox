import React, { useState } from "react";
import { Link } from "react-router-dom";


const TopNav= props => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  

    return(
        <nav id="sticky" className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <a className="navbar-brand" href="/">Daniel Vox</a>

            <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarColor03">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to="/" className="nav-link">Home
                    {/* <span className="sr-only">(current)</span> */}
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/demos" className="nav-link">Targeted Demos</Link>                    
                </li>
                <li className="nav-item">
                    <Link to="/testimonials" className="nav-link">Testimonials</Link>  
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>  
                </li>
                <li className="nav-item">
                    <Link to="/recentWork" className="nav-link">Recent Work</Link>  
                </li>
                </ul>

            </div>
        </nav>
    );
}

export default TopNav;