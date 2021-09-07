
import React, {useState } from "react";
import { Card} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import audioBookData from "../data/audio-book-data";
import testimonialData from "../data/testimonal-data";
import demoData from "../data/demo-data";
import responsiveCarousel from "../data/responsive-carousel";
import Kustom from "../Components/Kustom";
import BookCard from "../Components/BookCard";
import headshot from '../images/daniel-headshot.jpg';
import BlockQuote from "../Components/BlockQuote";
import iconFacebook from "../images/iconfacebook.png";
import iconLinkedIn from "../images/iconlinkedin.png";
import iconSoundcloud from "../images/iconsoundcloud.png";
import iconTwitter from "../images/icontwitter.png";
import iconEmail from "../images/iconemail.png";
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
            <div className="sections" id="home">
                <div className="bio-content">
                {/* <h1 className="text-primary display-3">about</h1> */}

                    <div className="flex-image">
                        <img src={headshot} style={{width: "20vw"}} alt="headshot"/>
                    </div>
                    <div className="flex-bio">
                    <h1 id="head">Daniel Dorse</h1>
                    <h3 id="subheadone">THE VOICE YOU WANT TO LISTEN TO</h3>
                    <h5>commericals . audiobooks . imaging</h5>
                             <a href="https://soundcloud.com/danielvox" target="_blank" rel="noreferrer noopener" aria-label="soundcloud"><img  src={iconSoundcloud} alt="soundcloud"/></a>
                            <a href="https://www.linkedin.com/in/daniel-dorse-b8b20046/" target="_blank" rel="noreferrer noopener" aria-label="linkedin"><img  src={iconLinkedIn} alt="linkedin"/></a> 
                            <a href="https://www.facebook.com/daniel.dorse/" target="_blank" rel="noreferrer noopener" aria-label="facebook"><img  src={iconFacebook} alt="facebook"/></a>
                            <a href="https://twitter.com/danielvox1" target="_blank" rel="noreferrer noopener" aria-label="twitter"><img  src={iconTwitter} alt="twitter"/></a>
                            <a href="mailto:danielvox@cox.net" target="_blank" rel="noreferrer noopener" aria-label="email"><img  src={iconEmail} alt="email"/></a>
                    </div>
                </div>
            </div>
            {/* -----DEMOS */}
            <div id="demo-section" className="sections">
                <div className="section-content">
                    <h2 className="text-primary display-3">DEMOS</h2>
                    <Kustom tracks={demoData}/>
                </div>                        
            </div>
            {/* -----AUDIOBOOKS */}
            <div id="audiobook-section" className="audioBook sections">
                <div className="section-content">                        
                <h2 className="text-primary display-4">AUDIOBOOKS</h2>
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
            <h2 className="text-primary display-4">TESTIMONIALS</h2>
                {/* <div className="section-content"> */}
                    <ul className="flex-container">
                        {testimonialData.map((test)=>(<BlockQuote key={test.id} author={test.author} body={test.body} source={test.source}/>))}
                    </ul>
                </div>
            {/* </div> */}
        </div>
    );
}

export default Sections;