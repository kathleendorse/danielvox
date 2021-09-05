import React, { useState, useRef, useEffect } from 'react'
// import { BsArrowLeftShort } from "react-icons/bs"
// import { BsArrowRightShort } from "react-icons/bs"
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"
import styles from "./AudioPlayer.module.css";

const CustomAudioPlayer = (demo) => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  // const [currentDemo, setCurrentDemo] = useState("");

  // references
  const audioPlayer = useRef();   // reference our audio component
  const progressBar = useRef();   // reference our progress bar
  const animationRef = useRef();  // reference the animation
  

  // useEffect(() => {
  //   // const seconds = Math.floor(audioPlayer.current.duration);
  //   // setDuration(seconds);
  //   // progressBar.current.max = seconds;
  //   // setCurrentDemo(demo);
    
  // }, [
  //   // audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState
  // ]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
  }

  const startPlaying = ()=>{
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
    togglePlayPause();
  }

  // const backThirty = () => {
  //   progressBar.current.value = Number(progressBar.current.value - 30);
  //   changeRange();
  // }

  // const forwardThirty = () => {
  //   progressBar.current.value = Number(progressBar.current.value + 30);
  //   changeRange();
  // }

  return (
    <div className={styles.audioPlayer}>
      {/* <audio ref={audioPlayer} src={commercialDemo} preload="auto"></audio> */}
      <audio ref={audioPlayer} src={demo} preload="none"></audio>


      <div>
      <button onClick={startPlaying} className={styles.playPause}>
        {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
      </button> 
        <span className={styles.currentTime}>{calculateTime(currentTime)}     </span>
        <input type="range" className={styles.progressBar} defaultValue="0" ref={progressBar} onChange={changeRange} />
      </div>


    </div>
  )
}

export default CustomAudioPlayer;