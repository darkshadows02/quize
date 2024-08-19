import React from 'react'
import { useSelector } from 'react-redux'

const Showscorecard = () => {
      const score=useSelector((store)=>store.quize.score);
      // score=60;
  return (
    <div className='pt-32 bg-gray-900  h-screen'> 
           <div className=' bg-pink-300   h-96 w-[600px] rounded-lg m-auto pl-20  pt-14'>
                 <h1 className=' font-bold text-2xl'>Dear User,</h1>
                 <h1 className=' font-bold ml-32 mt-14'>Your score is : <span className=' text-green-500'>{score}</span>  </h1>
                 <h1 className=' font-bold ml-32 '>Out of : <span className=' text-gray-500'>60</span></h1>
                 {score>=30 && <h1 className='ml-32'>Pass</h1>}
           </div>
    </div>
  )
}

export default Showscorecard