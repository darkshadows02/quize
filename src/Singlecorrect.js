import React from 'react'
import { useSelector } from 'react-redux'
import Question from './Question'
import Showscorecard from './Showscorecard'

const Singlecorrect = () => {

     const question=useSelector((store)=>
          store.quize.items1
     )
     const showscorecardinbody=useSelector((store)=>store.quize.Showscorefinal);
  return (
    <div className=''> 
      
      { (showscorecardinbody===true)?
       <div> 
       {
        question.map((ques, index)=>(
            <Question key={index}  ques={ques} />
        )
        )
       }
       </div> 
       :
         <Showscorecard />
      }
      
    </div>
  )
}

export default Singlecorrect