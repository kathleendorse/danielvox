import React, {useState} from "react";
import {Container, Row, Col, Table} from "react-bootstrap";
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
        <Container fluid>
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
            <Row>
                <Col></Col>
                <Col xs={5}>
                    <ResponsivePlayer url={url}/>
                </Col>                
                <Col xs={5}>

                    <Table striped bordered hover responsive="sm" size="sm" >
                        {/* <thead>
                            <tr>
                            <th>Target</th>
                            <th>Tags</th>
                            <th>Link</th>

                            </tr>
                        </thead> */}
                        <tbody>
                            {/* <tr id="commerical-demos" onClick={() => handleClick()}> */}
                            {/* <button onClick={() => this.handleClick()}>
        Click me
      </button> */}
                            {/* <td>Commercial</td>
                            <td>#WorkingClass #Friendly</td>
                            <td>@mdo</td>
                            </tr> */}
                            {/* <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            </tr> */}
                            {demos.map((demo)=>(
                                <tr key={demo.id} onClick={()=>{setUrl(demo.link)}} className="table-dark">
                                    <td>{demo.target}</td>
                                    <td>{demo.tags}</td>
                                    {/* <td>
                                        <a href={demo.link} target="_blank"  rel="noreferrer noopener" aria-label="">
                                            <img src={iconSoundcloud} alt="soundcloud"/>
                                        </a>
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
                <Col></Col>
            </Row>





            
        </Container>    
    );
}

export default Demos;