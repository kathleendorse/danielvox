import React from "react";
import { Card } from 'react-bootstrap';

const BookCard = ({title, image, mp3})=>{

    return(
        <Card style={{width: "13rem"}}>
            <Card.Body>
                <div className="card-title book-card-title">{title}</div>
                <Card.Img src={image}/>
                <Card.Text>
                    <audio controls src={mp3} type="audio/mpeg">
                        Your browser does not support the <code>audio</code> element.
                    </audio>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default BookCard;