import React from 'react';
import {BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { FcNext } from 'react-icons/fc';
import { FcPrevious } from 'react-icons/fc';

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
      <FcPrevious />
    </button>
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
    <button
      type="button"
      className="next"
      aria-label="Next"
      onClick={onNextClick}
    >
      <FcNext />
    </button>

      </div>

    );
  
  export default KustomControls;