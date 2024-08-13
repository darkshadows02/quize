import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addscore } from './store/quizeSlice';

const Question = (props) => {
     const obj=props.ques;
     const[selectedOption, setselectedOption]=useState();
        const arr=[obj.incorrect_answers[0], obj.incorrect_answers[1], obj.incorrect_answers[2], obj.correct_answer];
           arr.sort();
        const [flg, setflg]=useState(true);
          //  const score=useSelector((store)=> store.quize.score);
          const dispatch=useDispatch();
           const handleChange=(e)=>{
            setselectedOption(e.target.value);
           }
           const selectcorrectoption=()=>{
            if(selectedOption.length==0){
              alert("please select option")
              }else
                  if(selectedOption==obj.correct_answer){
                      dispatch(addscore(10))
                  }else{
                       setflg(!flg);
                       
                  }
           }
  return (
    <div> 
        <div> 
          <div className='h-screen bg-slate-800   pt-32'>
                 <div className=' h-2/3 w-1/2 m-auto  bg-blue-400 rounded-lg '>
                       <div className=' pl-8 pt-8 pr-5 mb-4'>
                       <h1 className=' font-bold'>Question</h1>
                      <h1>{obj.question}</h1>
                      </div>
                      <div className='pl-8'>
                            {
                              arr.map((option)=>(
                                  <div>
                                  <input
                                    type='radio'
                                    name='options'
                                    value={option}
                                    checked={selectedOption === option}
                                     onChange={handleChange}
                                     className='p-2 bg-black'
                                  /> 
                                  <label className='pl-3'>{option}</label>
                                  </div>
                              ))
                            }
                            <div className='flex mt-12'> 
                            <button onClick={selectcorrectoption}  className='p-2 bg-black text-white rounded-md  font-bold  m-auto'>SUMBIT</button>
                            </div>
                      </div>
                      {flg==false && <h1 className=' text-red-500 text-right mr-4 mb-11 font-bold'>Worng Ans..</h1>}
                 </div>
          </div>
        </div>
    </div>
  )
}

export default Question