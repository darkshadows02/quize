import React from 'react'
import { useSelector } from 'react-redux'
import Question from './Question'

const Singlecorrect = () => {

     const question=useSelector((store)=>
          store.quize.items1
     )
  return (
    <div className=''> 
       
       {
        question.map((ques, index)=>(
            <Question key={index}  ques={ques} />
        )
        )
       }
    </div>
  )
}

export default Singlecorrect