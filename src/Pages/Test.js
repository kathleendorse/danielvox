
import React, {useState } from "react";
import { Card} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import audioBookData from "../data/audio-book-data";
import demoData from "../data/demo-data";
import responsiveCarousel from "../data/responsive-carousel";
import Kustom from "../Components/Kustom";
// https://w.soundcloud.com/player/?url=https://soundcloud.com/danielvox/daniel-dorse-commercial-demo&visual=true&buying=false&liking=false&download=false&sharing=false&show_comments=false&show_playcount=false&callback=true
// https://w.soundcloud.com/player/?url=https://soundcloud.com/danielvox/
// 2013-audiobook-demo-for-daniel
//2013-audiobook-demo-for-daniel
//daniel-dorse-salt-of-the-earth
//daniel-dorse-british
//daniel-dorse-travel-luxury
//daniel-dorse-e-learning
// &visual=true&buying=false&liking=false&download=false&sharing=false&show_comments=false&show_playcount=false&callback=true
function Sections(){    

    return (
        <div>
            {/* -----HERO */}
            <div className="big-image" id="home">
                <div className="overlay">
                    <h1>DANIEL DORSE</h1>
                    <h3>THE VOICE YOU WANT TO LISTEN TO</h3>
                </div>
            </div>
            {/* -----DEMOS */}
            <div id="demo-section" className="sections">
                <div className="section-content">
                    <h1 className="text-danger display-3">demos</h1>
                    <Kustom tracks={demoData}/>
                </div>                        
            </div>
            {/* -----AUDIOBOOKS */}
            <div id="audiobook-section" className="audioBook sections">
                <div id="section-content">                        
                <h1 className="text-danger display-4">audiobooks</h1>
                    <div id="carousel-container">    
                        <Carousel responsive={responsiveCarousel} centerMode={false} partialVisible infinite renderArrowsOutside >
                            {audioBookData.map((book)=>(        
                                <Card style={{width: "13rem" }} key={book.id}>
                                    <Card.Body>
                                        <Card.Title>{book.genres}</Card.Title>
                                        <Card.Img src={book.image}/>
                                        <Card.Text>
                                            <audio
                                                    controls
                                                    src={book.mp3}
                                                    type="audio/mpeg"
                                                    >                            
                                                    Your browser does not support the
                                                    <code>audio</code> element.
                                                </audio>
                                        </Card.Text>
                                    </Card.Body>
                                </Card> 
                            ))}
                        </Carousel>  
                    </div>
                    </div>
            </div>
            {/* -----TESTIMONIAL */}
            <div id="testimonial-section" className="sections">
                <div className="section-content">
                    <h1 className="text-danger display-4">testimonials</h1>
                    </div>
            </div>
        </div>
    );
}

export default Sections;