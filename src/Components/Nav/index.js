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
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="#">Daniel Vox</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <Link to="/danielvox/#" className="nav-link">Home
                    {/* <span class="sr-only">(current)</span> */}
                    </Link>
                    {/* <a class="nav-link" href="/home">Home
                    <span class="sr-only">(current)</span>
                    </a> */}
                </li>
                <li class="nav-item">
                    <Link to="/danielvox/#/demos" className="nav-link">Targeted Demos</Link>                    
                    {/* <a class="nav-link" href="/demos">Targeted Demos</a> */}
                </li>
                <li class="nav-item">
                    <Link to="/danielvox/#/testimonials" className="nav-link">Testimonials</Link>  
                    {/* <a class="nav-link" href="/testimonials">Testimonials</a> */}
                </li>
                <li class="nav-item">
                    <Link to="/danielvox/#/contact" className="nav-link">Contact</Link>  
                    {/* <a class="nav-link" href="/contact">Contact</a> */}
                </li>
                <li class="nav-item">
                    <Link to="/danielvox/#/recentWork" className="nav-link">Recent Work</Link>  
                    {/* <a class="nav-link" href="/recentWork">Recent Work</a> */}
                </li>
                </ul>

            </div>
        </nav>
    );
}

export default Navi;