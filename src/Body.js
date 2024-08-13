import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItem1, addItem2, timeractive } from './store/quizeSlice';
import { Link } from 'react-router-dom';


const Body = () => {
  const dispatch=useDispatch();

  useEffect(()=>{
     featchdata();
  }, [])
  const featchdata= async ()=>{
         const data= await fetch("https://opentdb.com/api.php?amount=50&difficulty=medium");
          const json=await data.json();
          setintoredux(json.results);
  }
  const setintoredux=(list)=>{
          if(list.length==0){
               return ;
          }
    const first=list.map((data)=>{
          if(data.type=="multiple"){
               dispatch(addItem1(data));
          }else{
           dispatch(addItem2(data));
          }
     })

  }
  const handleStartQuiz=()=>{
        dispatch(timeractive());
  }

  return (
       <div >
         
         <div>
  <img className='h-auto w-full' src='https://t4.ftcdn.net/jpg/04/39/13/37/360_F_439133763_FrLdhZsd5aGC23r9ATARuKJBr8ifZjIe.jpg' /> 
  <Link to='/singlecorrect'> <button onClick={handleStartQuiz} className='absolute  bottom-36   transform -translate-x-1/2 px-14 py-3  bg-slate-300  text-black rounded  ml-[840px] hover:bg-black hover:text-white'>
    START
  </button> </Link>
</div>

         
       </div>
  )
}

export default Body