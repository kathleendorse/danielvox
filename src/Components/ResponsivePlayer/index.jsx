import React from "react";
import ReactPlayer from "react-player";
import "./style.css";

const ResponsivePlayer = () => {

    return (
        <div className="player-wrapper">
            <ReactPlayer 
                className = "react-player"
                url="https://soundcloud.com/danielvox/daniel-dorse-commercial-demo"
                width= "100%"
                height="60%"

            />
        </div>
    )
    
}
    
    export default ResponsivePlayer;