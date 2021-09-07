
import React, {useState } from "react";
import { Card} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import audioBookData from "../data/audio-book-data";
import demoData from "../data/demo-data";
import responsiveCarousel from "../data/responsive-carousel";
import Kustom from "../Components/Kustom";
import BookCard from "../Components/BookCard";
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
            {/* <div className="big-image" id="home">
                <div className="overlay">
                    <h1 className="h1">DANIEL DORSE</h1>
                    <h3>THE VOICE YOU WANT TO LISTEN TO</h3>
                </div>
            </div> */}
            <div className="sections">
                <div className="bio-content">
                {/* <h1 className="text-primary display-3">about</h1> */}

                    <div className="flex-image">
                        <img src={headshot} style={{width: "20vw"}} alt="headshot"/>
                    </div>
                    <div className="flex-bio">
                    <h1 id="head">Daniel Dorse</h1>
                    <h3 id="subheadone">THE VOICE YOU WANT TO LISTEN TO</h3>

                    </div>
                </div>
            </div>
            {/* -----DEMOS */}
            <div id="demo-section" className="sections">
                <div className="section-content">
                    <h1 className="text-primary display-3">demos</h1>
                    <Kustom tracks={demoData}/>
                </div>                        
            </div>
            {/* -----AUDIOBOOKS */}
            <div id="audiobook-section" className="audioBook sections">
                <hr/>
                <div className="section-content">                        
                <h1 className="text-primary display-4">audiobooks</h1>
                    <div id="carousel-container">    
                        <Carousel responsive={responsiveCarousel} centerMode={false} partialVisible infinite renderArrowsOutside >
                            {audioBookData.map((book)=>(   
                                <BookCard key={book.id} title={book.genres} image={book.image} mp3={book.mp3} />    
                            ))}
                        </Carousel>  
                    </div>
                    </div>
            </div>
            {/* -----TESTIMONIAL */}
            <div id="testimonial-section" className="sections">
                <div className="section-content">
                    <h1 className="text-primary display-4">testimonials</h1>
                    </div>
            </div>
        </div>
    );
}

export default Sections;