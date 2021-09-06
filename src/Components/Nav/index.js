import React, { useState } from "react";
// import { Link } from "react-router-dom";
import iconFacebook from "../../images/iconfacebook.png";
import iconLinkedIn from "../../images/iconlinkedin.png";
import iconSoundcloud from "../../images/iconsoundcloud.png";
import iconTwitter from "../../images/icontwitter.png";
import iconEmail from "../../images/iconemail.png";
import {Link} from 'react-scroll';
import { auto } from "@popperjs/core";

const TopNav= props => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  

    return(
        <nav id="sticky" className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
            <div className="container-fluid"> 
                <a className="navbar-brand" href="#page-top">danielvox</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                {/* <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}> */}
                {/* <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}> */}
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarColor03 navbarNavDropdown">
                {/* <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarColor03"> */}
                <ul className="navbar-nav me-auto">
                {/* <ul className="navbar-nav mr-auto"> */}
                    <li className="nav-item">
                        {/* <Link to="/" className="nav-link">Home */}
                        {/* <span className="sr-only">(current)</span> */}
                        {/* </Link> */}
                        {/* <a href="#page-top" className="nav-link">home</a> */}
                        <Link className="nav-link" to="home" spy={true} smooth={true}>home</Link>
                    </li>
                    <li className="nav-item">
                        {/* <Link to="/demos" className="nav-link">Demos</Link>                     */}
                        {/* <a href="#demo-section" className="nav-link">
                            demos
                        </a> */}
                        <Link className="nav-link" to="demo-section" spy={true} smooth={true}>demos</Link>
                    </li>
                    <li className="nav-item">
                        {/* <Link to="/audiobooks" className="nav-link">Audio Books</Link>   */}
                        {/* <a href="#audiobook-section" className="nav-link">audiobooks</a> */}
                        <Link className="nav-link" to="audiobook-section" spy={true} smooth={true}>audiobook</Link>
                    </li>
                    <li className="nav-item">
                        {/* <Link to="/testimonials" className="nav-link">Testimonials</Link>   */}
                        {/* <a href="#testimonal-section" className="nav-link">testimonials</a> */}
                        <Link className="nav-link" to="testimonial-section" spy={true} smooth={true}>testimonials</Link>
                    </li>
                    <li className="nav-item dropdown">
                        {/* <a className="nav-link dropdown-toggle show" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">Dropdown</a> */}
                        {/* <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">Dropdown</a> */}
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          contact
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        {/* <div class="dropdown-menu" data-bs-popper="none"> */}
                            <a className="dropdown-item" href="https://soundcloud.com/danielvox" target="_blank" rel="noreferrer noopener" aria-label=""><span style={{margin: auto}}><img  src="" alt=""/></span></a>
                            <a className="dropdown-item" href="https://soundcloud.com/danielvox" target="_blank" rel="noreferrer noopener" aria-label="soundcloud"><img  src={iconSoundcloud} alt="soundcloud"/></a>
                            <a className="dropdown-item" href="https://www.linkedin.com/in/daniel-dorse-b8b20046/" target="_blank" rel="noreferrer noopener" aria-label="linkedin"><img  src={iconLinkedIn} alt="linkedin"/></a> 
                            <a className="dropdown-item" href="https://www.facebook.com/daniel.dorse/" target="_blank" rel="noreferrer noopener" aria-label="facebook"><img  src={iconFacebook} alt="facebook"/></a>
                            <a className="dropdown-item" href="https://twitter.com/danielvox1" target="_blank" rel="noreferrer noopener" aria-label="twitter"><img  src={iconTwitter} alt="twitter"/></a>
                            <a className="dropdown-item" href="mailto:danielvox@cox.net" target="_blank" rel="noreferrer noopener" aria-label="email"><img  src={iconEmail} alt="email"/></a>
                        </div>    

                    </li>

                </ul>

            </div>
            </div>
        </nav>
    );
}

export default TopNav;