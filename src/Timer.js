 // Timer.js
import React, { useState, useEffect } from 'react';

const Timer = ({ isActive, onTimeUp }) => {
  const initialTime = 3600; 
  const [timeLeft, setTimeLeft] = useState(initialTime);
   console.log("suraj")
  useEffect(() => {
    let timer = null;

    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);  
    } else if (timeLeft === 0) {
      onTimeUp();
      clearInterval(timer);
    }
    return () => clearInterval(timer);

  }, [isActive, timeLeft, onTimeUp]);

 
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${('0' + minutes).slice(-2)}:${('0' + secs).slice(-2)}`;
  };

  return (
    <div>
      <h1 className='p-2 bg-white font-bold rounded-md ml-5'>Time Left: <span className=' text-red-400'> {formatTime(timeLeft)} </span></h1>
    </div>
  );
};

export default Timer;
