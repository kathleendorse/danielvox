import React from 'react';
//import { ReactComponent as Play } from './assets/play.svg';
import { FaPlay } from "react-icons/fa";
//import { ReactComponent as Pause } from './assets/pause.svg';
import { FaPause } from "react-icons/fa";
// import { ReactComponent as Next } from './assets/next.svg';
import { BsArrowRightShort } from "react-icons/bs";
//import { ReactComponent as Prev } from './assets/prev.svg';
import { BsArrowLeftShort } from "react-icons/bs";

const KustomControls = ({
    isPlaying,
      onPlayPauseClick,
    onPrevClick,
    onNextClick,
  }) => ( 
      <div className="kustom-controls">

    <button
      type="button"
      className="prev"
      aria-label="Previous"
      onClick={onPrevClick}
    >
      <BsArrowLeftShort />
    </button>
    {isPlaying ? (
      <button
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <FaPause />
      </button>
    ) : (
      <button
        type="button"
        className="play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <FaPlay />
      </button>
    )}
    <button
      type="button"
      className="next"
      aria-label="Next"
      onClick={onNextClick}
    >
      <BsArrowRightShort />
    </button>

      </div>

    );
  
  export default KustomControls;