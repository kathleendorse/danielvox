import React from 'react';

const BlockQuote = ({ body, author, source })=>{
 return(
    <li className="flex-item"> 
        <figure>
            <blockquote class="blockquote">
                <p class="mb-0">{ body }</p>
            </blockquote>
            <figcaption class="blockquote-footer">
                <p>-- 
                { author } <cite title="Source Title">{ source }</cite>
                </p>
            </figcaption>
        </figure>
    </li>
 );
}

export default BlockQuote;