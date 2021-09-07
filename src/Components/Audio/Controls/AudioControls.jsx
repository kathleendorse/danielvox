import React from 'react';
import {BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';

const AudioControls = ({
    isPlaying,
    onPlayPauseClick,
    onPrevClick,
    onNextClick,
  }) => ( 
      <span className="audio-controls">

    {isPlaying ? (
      <button
        type="button"
        className="pause btn"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <BsFillPauseFill />
      </button>
    ) : (
      <button
        type="button"
        className="play btn rounded-pill"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
<BsFillPlayFill/>
      </button>
    )}

      </span>

    );
  
  export default AudioControls;