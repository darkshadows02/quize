import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { quizefinished, timeractive } from './store/quizeSlice';
import Timer from './Timer';

const Header = () => {
       const[flg, setflg]=useState(true);
       const score=useSelector((store)=>store.quize.score);
       const store=useSelector((store)=>store.quize);
       const dispatch=useDispatch();
       const makefalse=()=>{
            setflg(!flg);
       }
       const handleTimeUp =()=>{
             dispatch(timeractive());
             dispatch(quizefinished());
       }
  return (
    <div className='fixed w-full'> 
      <div className='h-24 w-full bg-slate-400 pt-4 px-8'> 
         <div className=' flex '>
       <Link to='/'> 
           <img className='w-20 h-16  bg-slate-800 rounded-lg  ' src='https://as2.ftcdn.net/v2/jpg/05/29/98/25/1000_F_529982581_VkEiHVfd8kNM0H73cUw9VwDWyyP9BSxf.webp' />
         </Link>
         
          <div className='flex m-auto'>
             <Link to='/singlecorrect'>  <h1 className=' bg-neutral-800 text-white rounded-md p-2 mx-2  font-bold'>single correct </h1> </Link> 
            <Link to='/truefalse'>  <h1  className=' bg-neutral-800 text-white rounded-md p-2 mx-2 font-bold'>true/false</h1> </Link>  
             <h1 className='ml-20 bg-white p-2 rounded-md'>Score : <span className=' font-bold text-blue-500'>{score}</span>  </h1>
             <Timer isActive={store.isTimerActive} onTimeUp={handleTimeUp} />
          </div>
          </div>
            <div className='flex justify-end  -mt-12' >
                {
                    flg?<h1 onClick={makefalse} className=' bg-neutral-800 text-white rounded-md p-2 mx-2 font-bold cursor-pointer'>Login</h1>
                     :<h1 onClick={makefalse}  className=' bg-neutral-800 text-white rounded-md p-2 mx-2 font-bold cursor-pointer'>Logout</h1>
                }
            </div>
            
       </div>
    </div>
  )
}

export default Header