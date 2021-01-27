import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function AudioBooks(){

    //try using react carousel again instead of multicarousel
    //style audio player

    const audioBooks = [
        // {id: "acx0-011213", title: "Earthrise (Her Instruments Book 1)", author: "M.C.A. Hogarth", genres: "Science Fiction & Fantasy", mp3: "https://samples.audible.com/bk/acx0/011213/bk_acx0_011213_sample.mp3", image: "https://m.media-amazon.com/images/I/51IsL0zrXxL.jpg", link: "https://www.amazon.com/Earthrise-Her-Instruments-Book-1-ebook/dp/B00CLMGIZQ"}, 
        // {id: "acx0-106556", title: "State of Deception: A Mystery Thriller Novel (Virgil Jones Mystery Thriller Series Book 4)", author: "Thomas Scott", genres: "Mystery, Thriller & Suspense", mp3: "https://samples.audible.com/bk/acx0/106556/bk_acx0_106556_sample.mp3", image: "https://m.media-amazon.com/images/I/51plspceivL.jpg", link: "https://www.amazon.com/State-Deception-Mystery-Thriller-Virgil-ebook/dp/B076F4841P"}, 
        // {id: "acx0-090559", title: "The Assassin The Grey Man And The Surgeon", author: "D C Standsfield", genres: "Literature & Fiction", mp3: "https://samples.audible.com/bk/acx0/090559/bk_acx0_090559_sample.mp3", image: "https://m.media-amazon.com/images/I/41-NMcrBGNL.jpg", link: "https://www.amazon.com/gp/product/B009NUUI8M?ref_=dbs_m_mng_rwt_calw_tkin_0&storeType=ebooks"}, 
        // {id: "acx0-052650", title: "The TANNER Series, Book 1-3", author: "Remington Kane", genres: "Thrillers & Suspense", mp3: "https://samples.audible.com/bk/acx0/052650/bk_acx0_052650_sample.mp3", image: "https://m.media-amazon.com/images/I/51RNNxFeQ8L.jpg", link: "https://www.amazon.com/The-TANNER-Series-Book-1-3/dp/B01BFMLNLQ"}, 
        // {id: "acx0-063121", title: "Blister", author: "Jeff Strand", genres: "Horror", mp3: "https://samples.audible.com/bk/acx0/063121/bk_acx0_063121_sample.mp3", image: "https://m.media-amazon.com/images/I/51ceNtV5S8L.jpg", link: "https://www.amazon.com/Blister-Jeff-Strand-audiobook/dp/B01I5HL0HG"}, 
        // {id: "acx0-228308", title: "Enemy Lines: Legacy of War, Book 2", author: "Joshua James", genres: "Science Fiction & Fantasy", mp3: "https://samples.audible.com/bk/acx0/228308/bk_acx0_228308_sample.mp3", image: "https://m.media-amazon.com/images/I/51VM0Td-N4L.jpg", link: "https://www.amazon.com/Enemy-Lines-Legacy-War-Book/dp/B08PHS61BC"}, 
        // {id: "edel-015133", title: "Utilitarianism (Kindle Edition)", author: "John Stuart Mill", genres: "Political & Social Sciences, Philosophy", mp3: "https://samples.audible.com/bk/edel/015133/bk_edel_015133_sample.mp3", image: "https://m.media-amazon.com/images/I/513vUFn90CL._SY346_.jpg", link: "https://www.amazon.com/Utilitarianism-John-Stuart-Mill-ebook/dp/B00849BWNS"}, 
        // {id: "acx0-018074", title: "Archangel (de Lohr Dynasty Book 8) Kindle Edition", author: "Kathryn Le Veque", genres: "Romance", mp3: "https://samples.audible.com/bk/acx0/018074/bk_acx0_018074_sample.mp3", image: "https://m.media-amazon.com/images/I/51lFHgMpCnL._SY346_.jpg", link: "https://www.amazon.com/Archangel-Lohr-Dynasty-Book-8-ebook/dp/B0085QFAU6"}, 
        // {id: "acx0-039393", title: "The Westerfield Trilogy", author: "Renee Rose", genres: "Genre Fiction, Historical", mp3: "https://samples.audible.com/bk/acx0/039393/bk_acx0_039393_sample.mp3", image: "https://m.media-amazon.com/images/I/519x20d0LrL.jpg", link: "https://www.amazon.com/The-Westerfield-Trilogy/dp/B011S49TCG"}, 
        // {id: "acx0-026008", title: "Love Garage: The Love Brothers", author: "Liz Crowe", genres: "Romance, Contemporary", mp3: "https://samples.audible.com/bk/acx0/026008/bk_acx0_026008_sample.mp3", image: "https://m.media-amazon.com/images/I/51JLvV2HQaL.jpg", link: "https://www.amazon.com/Love-Brothers-Garage/dp/1507527160"}, 
        // {id: "acx0-024310", title: "Toppling the Dome: Art and Politics During the Construction of the Capitol Dome", author: "Richard Novak", genres: "History", mp3: "https://samples.audible.com/bk/acx0/024310/bk_acx0_024310_sample.mp3", image: "https://m.media-amazon.com/images/I/51zKkKB0slL.jpg", link: "https://www.amazon.com/Topping-Dome-Politics-Construction-Capitol-ebook/dp/B006GQF5DE"}, 
        // {id: "acx0-067268", title: "Tucker's Justice (Wild West Cowboys Book 1)", author: "Maggie Carpenter", genres: "Romance, Contemporary", mp3: "https://samples.audible.com/bk/acx0/067268/bk_acx0_067268_sample.mp3", image: "https://m.media-amazon.com/images/I/51K30QCSg7L.jpg", link: "https://www.amazon.com/Tuckers-Justice-Maggie-Carpenter-audiobook/dp/B01L7ZSGTS"}, 
        // {id: "acx0-140493", title: "Mercury's Son", author: "Luke E.T. Hindmarsh", genres: "Mystery, Thriller & Suspense, Thrillers & Suspense, Technothrillers", mp3: "https://samples.audible.com/bk/acx0/140493/bk_acx0_140493_sample.mp3", image: "https://m.media-amazon.com/images/I/51ycnkrv4cL.jpg", link: "https://www.amazon.com/Mercurys-Son-Luke-ET-Hindmarsh-audiobook/dp/B07MXQXC2L"}, 
        // {id: "acx0-178268", title: "The King of Satan's Eyes: The Lincoln Blackthorn Series, Book 1", author: "Charles L. Grant", genres: "Action & Adventure, Mystery, Thriller & Suspense", mp3: "https://samples.audible.com/bk/acx0/178268/bk_acx0_178268_sample.mp3", image: "https://m.media-amazon.com/images/I/5192sp0cEeL.jpg", link: "https://www.amazon.com/King-Satans-Eyes-Lincoln-Blackthorne/dp/B083LDQPLR"}, 
        // {id: "acx0-019433", title: "Yo Ho Ho and a Very Merry Christmas!", author: "S DeGiorgio", genres: "Short Stories & Anthologies, Childrens", mp3: "https://samples.audible.com/bk/acx0/019433/bk_acx0_019433_sample.mp3", image: "https://m.media-amazon.com/images/I/51vqmy6o+GL.jpg", link: "https://www.amazon.com/Yo-Ho-Very-Merry-Christmas/dp/B00KX8QLN4"}, 
        // {id: "acx0-201402", title: "Firefall (The Elements Series Book 1)", author: "J.H. Bogran", genres: "Thrillers & Suspense", mp3: "https://samples.audible.com/bk/acx0/201402/bk_acx0_201402_sample.mp3", image: "https://m.media-amazon.com/images/I/41c2xpAQMcL.jpg", link: "https://www.amazon.com/Firefall-Elements-Book-1/dp/B08B45J3FH"}, 
        // {id: "acx0-148480", title: "The Equilibrist", author: "Erasmus Cromwell-Smith", genres: "Genre Fiction, Metaphysical & Visionary", mp3: "https://samples.audible.com/bk/acx0/148480/bk_acx0_148480_sample.mp3", image: "https://m.media-amazon.com/images/I/418OCayXAML.jpg", link: "https://www.amazon.com/The-Equilibrist/dp/B07QR7RC5Z"},
        {id: "acx0-011213", title: "Earthrise (Her Instruments Book 1)", author: "M.C.A. Hogarth", genres: "Science Fiction & Fantasy", mp3: "https://samples.audible.com/bk/acx0/011213/bk_acx0_011213_sample.mp3", image: "https://res.cloudinary.com/katedorse/image/upload/v1611778170/DanielVox/axc0-011213.jpg", link: "https://www.amazon.com/Earthrise-Her-Instruments-Book-1-ebook/dp/B00CLMGIZQ"}, 
        {id: "acx0-106556", title: "State of Deception: A Mystery Thriller Novel (Virgil Jones Mystery Thriller Series Book 4)", author: "Thomas Scott", genres: "Mystery, Thriller & Suspense", mp3: "https://samples.audible.com/bk/acx0/106556/bk_acx0_106556_sample.mp3", image: "https://res.cloudinary.com/katedorse/image/upload/v1611778170/DanielVox/axc0-106556.jpg", link: "https://www.amazon.com/State-Deception-Mystery-Thriller-Virgil-ebook/dp/B076F4841P"}, 
        {id: "acx0-090559", title: "The Assassin The Grey Man And The Surgeon", author: "D C Standsfield", genres: "Literature & Fiction", mp3: "https://samples.audible.com/bk/acx0/090559/bk_acx0_090559_sample.mp3", image: "https://res.cloudinary.com/katedorse/image/upload/v1611778170/DanielVox/axc0-090559.jpg", link: "https://www.amazon.com/gp/product/B009NUUI8M?ref_=dbs_m_mng_rwt_calw_tkin_0&storeType=ebooks"}, 
        {id: "acx0-052650", title: "The TANNER Series, Book 1-3", author: "Remington Kane", genres: "Thrillers & Suspense", mp3: "https://samples.audible.com/bk/acx0/052650/bk_acx0_052650_sample.mp3", image: "https://res.cloudinary.com/katedorse/image/upload/v1611778170/DanielVox/axc0-052650.jpg", link: "https://www.amazon.com/The-TANNER-Series-Book-1-3/dp/B01BFMLNLQ"}, 
        {id: "acx0-063121", title: "Blister", author: "Jeff Strand", genres: "Horror", mp3: "https://samples.audible.com/bk/acx0/063121/bk_acx0_063121_sample.mp3", image: "https://res.cloudinary.com/katedorse/image/upload/v1611778170/DanielVox/axc0-063121.jpg", link: "https://www.amazon.com/Blister-Jeff-Strand-audiobook/dp/B01I5HL0HG"}, 
        {id: "acx0-228308", title: "Enemy Lines: Legacy of War, Book 2", author: "Joshua James", genres: "Science Fiction & Fantasy", mp3: "https://samples.audible.com/bk/acx0/228308/bk_acx0_228308_sample.mp3", image: "https://res.cloudinary.com/katedorse/image/upload/v1611778170/DanielVox/axc0-228308.jpg", link: "https://www.amazon.com/Enemy-Lines-Legacy-War-Book/dp/B08PHS61BC"}, 
        {id: "edel-015133", title: "Utilitarianism (Kindle Edition)", author: "John Stuart Mill", genres: "Philosophy", mp3: "https://samples.audible.com/bk/edel/015133/bk_edel_015133_sample.mp3", image: "https://res.cloudinary.com/katedorse/image/upload/v1611777100/DanielVox/edel-015133.jpg", link: "https://www.amazon.com/Utilitarianism-John-Stuart-Mill-ebook/dp/B00849BWNS"}, 
        {id: "acx0-018074", title: "Archangel (de Lohr Dynasty Book 8) Kindle Edition", author: "Kathryn Le Veque", genres: "Romance", mp3: "https://samples.audible.com/bk/acx0/018074/bk_acx0_018074_sample.mp3", image: "https://res.cloudinary.com/katedorse/image/upload/v1611778170/DanielVox/axc0-018074.jpg", link: "https://www.amazon.com/Archangel-Lohr-Dynasty-Book-8-ebook/dp/B0085QFAU6"}, 
        {id: "acx0-039393", title: "The Westerfield Trilogy", author: "Renee Rose", genres: "Historical Genre Fiction", mp3: "https://samples.audible.com/bk/acx0/039393/bk_acx0_039393_sample.mp3", image: "https://res.cloudinary.com/katedorse/image/upload/v1611778170/DanielVox/axc0-039393.jpg", link: "https://www.amazon.com/The-Westerfield-Trilogy/dp/B011S49TCG"}, 
        {id: "acx0-026008", title: "Love Garage: The Love Brothers", author: "Liz Crowe", genres: "Contemporary Romance", mp3: "https://samples.audible.com/bk/acx0/026008/bk_acx0_026008_sample.mp3", image: "https://res.cloudinary.com/katedorse/image/upload/v1611778170/DanielVox/axc0-026008.jpg", link: "https://www.amazon.com/Love-Brothers-Garage/dp/1507527160"}, 
        {id: "acx0-024310", title: "Toppling the Dome: Art and Politics During the Construction of the Capitol Dome", author: "Richard Novak", genres: "History", mp3: "https://samples.audible.com/bk/acx0/024310/bk_acx0_024310_sample.mp3", image: "https://res.cloudinary.com/katedorse/image/upload/v1611778170/DanielVox/axc0-024310.jpg", link: "https://www.amazon.com/Topping-Dome-Politics-Construction-Capitol-ebook/dp/B006GQF5DE"}, 
        {id: "acx0-067268", title: "Tucker's Justice (Wild West Cowboys Book 1)", author: "Maggie Carpenter", genres: "Contemporary Romance", mp3: "https://samples.audible.com/bk/acx0/067268/bk_acx0_067268_sample.mp3", image: "https://res.cloudinary.com/katedorse/image/upload/v1611778170/DanielVox/axc0-067268.jpg", link: "https://www.amazon.com/Tuckers-Justice-Maggie-Carpenter-audiobook/dp/B01L7ZSGTS"}, 
        {id: "acx0-140493", title: "Mercury's Son", author: "Luke E.T. Hindmarsh", genres: "Mystery, Thriller & Suspense", mp3: "https://samples.audible.com/bk/acx0/140493/bk_acx0_140493_sample.mp3", image: "https://res.cloudinary.com/katedorse/image/upload/v1611778170/DanielVox/axc0-140493.jpg", link: "https://www.amazon.com/Mercurys-Son-Luke-ET-Hindmarsh-audiobook/dp/B07MXQXC2L"}, 
        {id: "acx0-178268", title: "The King of Satan's Eyes: The Lincoln Blackthorn Series, Book 1", author: "Charles L. Grant", genres: "Thriller & Suspense", mp3: "https://samples.audible.com/bk/acx0/178268/bk_acx0_178268_sample.mp3", image: "https://res.cloudinary.com/katedorse/image/upload/v1611778170/DanielVox/axc0-178268.jpg", link: "https://www.amazon.com/King-Satans-Eyes-Lincoln-Blackthorne/dp/B083LDQPLR"}, 
        {id: "acx0-019433", title: "Yo Ho Ho and a Very Merry Christmas!", author: "S DeGiorgio", genres: "Childrens", mp3: "https://samples.audible.com/bk/acx0/019433/bk_acx0_019433_sample.mp3", image: "https://res.cloudinary.com/katedorse/image/upload/v1611778170/DanielVox/axc0-019433.jpg", link: "https://www.amazon.com/Yo-Ho-Very-Merry-Christmas/dp/B00KX8QLN4"}, 
        {id: "acx0-201402", title: "Firefall (The Elements Series Book 1)", author: "J.H. Bogran", genres: "Thrillers & Suspense", mp3: "https://samples.audible.com/bk/acx0/201402/bk_acx0_201402_sample.mp3", image: "https://res.cloudinary.com/katedorse/image/upload/v1611774936/DanielVox/axc0-201402.jpg", link: "https://www.amazon.com/Firefall-Elements-Book-1/dp/B08B45J3FH"}, 
        {id: "acx0-148480", title: "The Equilibrist", author: "Erasmus Cromwell-Smith", genres: "Metaphysical & Visionary", mp3: "https://samples.audible.com/bk/acx0/148480/bk_acx0_148480_sample.mp3", image: "https://res.cloudinary.com/katedorse/image/upload/v1611778170/DanielVox/axc0-148480.jpg", link: "https://www.amazon.com/The-Equilibrist/dp/B07QR7RC5Z"}, 
    ];






    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 2,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };

//test
    return(
        <Container fluid>
            <Row><br></br></Row>
            <Row>
                <Col><br></br></Col>
                <Col xs={10}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1 className="text-warning">AUDIOBOOKS</h1>
                </Col>
                <Col></Col>
            </Row> 
            <Row><br></br></Row>
            <Row>
                <Col></Col>
                <Col xs={7}>  
                    <Carousel responsive={responsive}>
                            {audioBooks.map((book)=>(
                              
                                <figure key={book.id}>
                                    <h5>{book.genres}</h5>
                                    <br></br>
                                    <a href={book.link} target="_blank" rel="noreferrer noopener" aria-label="This is an external link to an ebook on amazon (opens in new tab)">
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        className="img-fluid audioBook"
                                    />
                                    </a>
                                    <br></br>
                                    <br></br>
                                    <audio
                                        controls
                                        src={book.mp3}
                                        type="audio/mpeg"
                                        >                            
                                        Your browser does not support the
                                        <code>audio</code> element.
                                    </audio>

                                </figure> 
                            
                            
                        ))}
                    </Carousel>
                    
                </Col>
                <Col></Col>
            </Row>



        </Container>

    );
}

export default AudioBooks;