//  // Timer.js
// import React, { useState, useEffect } from 'react';
// import Showscorecard from './Showscorecard';

// const Timer = ({ isActive, onTimeUp }) => {
//   const initialTime = 10; 
//   const [timeLeft, setTimeLeft] = useState(initialTime);
//     //  const [timeoff, settimeoff] =useState(false);
//       //  if(timeLeft==0){
//       //       console.log("hjp");
//       //       onTimeUp();
//       //  }
//   useEffect(() => {
//     let timer = null;

//     if (isActive && timeLeft > 0) {
//       timer = setInterval(() => {
//         setTimeLeft(prevTime => prevTime - 1);
//       }, 1000);  
//     } else if (timeLeft === 0) {
//       // settimeoff(false);
//       onTimeUp();
//       clearInterval(timer);
//     }
//     return () => clearInterval(timer);

//   }, [isActive, timeLeft, onTimeUp]);

 
//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${('0' + minutes).slice(-2)}:${('0' + secs).slice(-2)}`;
//   };

//   return (
//     <div>
//       <h1 className='p-2 bg-white font-bold rounded-md ml-5'>Time Left: <span className=' text-red-400'> {formatTime(timeLeft)} </span></h1>
//       {/* {timeoff==true && <Showscorecard />} */}
//     </div>
//   );
// };

 



import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Showscorecard from './Showscorecard';
import { Showscore } from './store/quizeSlice';

const Timer = ({ isActive, onTimeUp }) => {
  const initialTime = 30;
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const dispatch=useDispatch();
      if(timeLeft==0){
        dispatch(Showscore());
      }
  const resetTimer = useCallback(() => {
       
    setTimeLeft(initialTime);
  }, [initialTime]);

  useEffect(() => {
    let timer;

    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            onTimeUp();
            clearInterval(timer);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isActive, timeLeft, onTimeUp]);

  useEffect(() => {
    if (!isActive) {
      resetTimer();
    }
  }, [isActive, resetTimer]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${('0' + minutes).slice(-2)}:${('0' + secs).slice(-2)}`;
  };

  return (
    <div>
      <h1 className='p-2 bg-white font-bold rounded-md ml-5'>
        Time Left: <span className='text-red-400'>{formatTime(timeLeft)}</span>
      </h1>
    </div>
  );
};

export default Timer;



 