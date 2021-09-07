import React, {useState, useEffect, useRef } from 'react';
import painting from '../images/painting.jpg';
import KustomControls from './Kustom-Konstrols';

const Kustom = ({ tracks })=>{


    const [trackIndex, setTrackIndex] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const { title, audioSrc } = tracks[trackIndex];

    const audioRef = useRef(new Audio(audioSrc));
    const intervalRef = useRef();
    const isReady = useRef(false);

    const { duration } = audioRef.current;
    
    const toPrevTrack = () => {
        if (trackIndex - 1 < 0) {
          setTrackIndex(tracks.length - 1);
        } else {
          setTrackIndex(trackIndex - 1);
        }
    }
      
    const toNextTrack = () => {
        if (trackIndex < tracks.length - 1) {
          setTrackIndex(trackIndex + 1);
        } else {
          setTrackIndex(0);
        }
    }

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
            startTimer();
        } else {
            clearInterval(intervalRef.current);
            audioRef.current.pause();
        }
        
    }, [isPlaying]);

    useEffect(() => {
        // Pause and clean up on unmount
        return () => {
          audioRef.current.pause();
          clearInterval(intervalRef.current);
        }
    }, []);

    // Handle setup when changing tracks
    useEffect(() => {
        audioRef.current.pause();
      
        audioRef.current = new Audio(audioSrc);
        setTrackProgress(audioRef.current.currentTime);
      
        if (isReady.current) {
            audioRef.current.play();
            setIsPlaying(true);
            startTimer();
        } else {
            // Set the isReady ref as true for the next pass
            isReady.current = true;
        }
    }, [trackIndex]);

    const startTimer = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);
  
        intervalRef.current = setInterval(() => {
          if (audioRef.current.ended) {
            toNextTrack();
          } else {
            setTrackProgress(audioRef.current.currentTime);
          }
        }, [1000]);
    }

    const onScrub = (value) => {
        // Clear any timers already running
      clearInterval(intervalRef.current);
      audioRef.current.currentTime = value;
      setTrackProgress(audioRef.current.currentTime);
    }
    
    const onScrubEnd = () => {
      // If not already playing, start
      if (!isPlaying) {
        setIsPlaying(true);
      }
      startTimer();
    }

    const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : '0%';
    const trackStyling = `
      -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
    `;
    
    return ( 
      <div className="kustom-audio-player">
          <div className="track-info">
            <img
            className="artwork"
            src='https://res.cloudinary.com/katedorse/image/upload/e_grayscale,o_82/v1630972162/painting_wxtfvj.jpg'
            // src={painting}
            alt={`track artwork for ${title} Demo by Daniel Dorse`}
        />
          <h4 className="title">{title}</h4>
          <KustomControls
            isPlaying={isPlaying}
            onPrevClick={toPrevTrack}
            onNextClick={toNextTrack}
            onPlayPauseClick={setIsPlaying}
          />
          <input
            type="range"
            value={trackProgress}
            step="1"
            min="0"
            max={duration ? duration : `${duration}`}
            className="progress demo-progress"
            onChange={(e) => onScrub(e.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
            style={{ background: trackStyling }}
          />    
        </div>
      </div>

    )
}

export default Kustom;