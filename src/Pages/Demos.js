import React, {useState} from "react";
import {Container, Row, Col, ButtonGroup, DropdownButton, Dropdown} from "react-bootstrap";
import ResponsivePlayer from "../Components/ResponsivePlayer";


function Demos(){

//breakpoints for columns depending on device move table under player
//highlight row if url matches 
//change from table to buttons??

    const [url, setUrl] = useState("https://soundcloud.com/danielvox/daniel-dorse-commercial-demo");

    const demos=[
        {
            id: 0,  
            target:"Comercial",
            tags:"#WorkingClass #Friendly",
            link:"https://soundcloud.com/danielvox/daniel-dorse-commercial-demo",
        },
        {   
            id: 1,  
            target:"Audio Books",
            tags:"",
            link:"https://soundcloud.com/danielvox/2013-audiobook-demo-for-daniel",
        },
        {
            id: 2,  
            target:"Salt-Of-The-Earth",
            tags:"",
            link:"https://soundcloud.com/danielvox/daniel-dorse-salt-of-the-earth",
        },
        {
            id: 3,  
            target:"British Characters",
            tags:"",
            link:"https://soundcloud.com/danielvox/daniel-dorse-british",
        },
        {
            id: 4,  
            target:"Travel and Luxury",
            tags:"",
            link:"https://soundcloud.com/danielvox/daniel-dorse-travel-luxury",
        },
        {
            id: 5,  
            target:"E-learning",
            tags:"",
            link:"https://soundcloud.com/danielvox/daniel-dorse-e-learning",
        }
    ];




    return(
        <Container fluid id="demos-section demo-s">
            <Row><br></br></Row>
            <Row>
                <Col><br></br></Col>
                <Col xs={10}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1 className="text-warning">TARGETED DEMOS</h1>
                </Col>
                <Col></Col>
            </Row> 
            <Row><br></br></Row>  
{/* ----------testOPTION 1 BUTTON DROP DOWN CENTERED PLAYER---------- */}
            <Row>
                <Col></Col>
                <Col xs={10}>
                    <ButtonGroup>
                        <DropdownButton as={ButtonGroup} title="Select Title to Listen" id="bg-nested-dropdown" size="lg">
                            {demos.map((demo)=>(
                                <Dropdown.Item eventKey={demo.id} key={demo.id} onClick={()=>{setUrl(demo.link)}}>
                                    <h5 className="text-light">
                                        {demo.target}
                                        </h5>
                                </Dropdown.Item>
                            ))}
                        </DropdownButton>
                    </ButtonGroup>
                    <br></br>
                    <br></br>
                </Col>
                <Col></Col>
            </Row> 
            <Row>
                <Col></Col>
                <Col xs={10}>
                    <ResponsivePlayer url={url}/>  
                </Col>
                <Col></Col>

            </Row>
            
        </Container>    
    );
}

export default Demos;

//test