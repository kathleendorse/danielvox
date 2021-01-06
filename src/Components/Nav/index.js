import React from "react";
import { Link } from "react-router-dom";
// import { Navbar, Nav } from "react-bootstrap";
//import Button from 'react-bootstrap/Button';

function Navi(){
    return(
        // <Navbar bg="dark" expand="md">
        //     <Navbar.Brand href="#home">Daniel Vox</Navbar.Brand>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="mr-auto">
        //             <Nav.Link href="#home">Home</Nav.Link>
        //             <Nav.Link href="#link">Link</Nav.Link>
        //             {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        //             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //             <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        //             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //             <NavDropdown.Divider />
        //             <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        //             </NavDropdown> */}
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>
        <nav id="sticky" className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <a className="navbar-brand" href="/">Daniel Vox</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to="/" className="nav-link">Home
                    {/* <span className="sr-only">(current)</span> */}
                    </Link>
                    {/* <a className="nav-link" href="/home">Home
                    <span className="sr-only">(current)</span>
                    </a> */}
                </li>
                <li className="nav-item">
                    <Link to="/demos" className="nav-link">Targeted Demos</Link>                    
                    {/* <a className="nav-link" href="/demos">Targeted Demos</a> */}
                </li>
                <li className="nav-item">
                    <Link to="/testimonials" className="nav-link">Testimonials</Link>  
                    {/* <a className="nav-link" href="/testimonials">Testimonials</a> */}
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>  
                    {/* <a className="nav-link" href="/contact">Contact</a> */}
                </li>
                <li className="nav-item">
                    <Link to="/recentWork" className="nav-link">Recent Work</Link>  
                    {/* <a class="nav-link" href="/recentWork">Recent Work</a> */}
                </li>
                </ul>

            </div>
        </nav>
    );
}

export default Navi;