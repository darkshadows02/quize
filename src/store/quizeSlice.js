import { createSlice } from "@reduxjs/toolkit";
 const quizeslice=createSlice({
      name:'quize',
      initialState:{
        items1:[],
        items2:[],
        score:0,
        isTimerActive:false,
        isQuizFinished:false
      },
      reducers:{
        addItem1:(state, action)=>{
            state.items1.push(action.payload)
        },
        addItem2:(state, action)=>{
          state.items2.push(action.payload)
        },
        addscore:(state, action)=>{
           state.score+=action.payload;
        },
        timeractive:(state)=>{
          state.isTimerActive=!state.isTimerActive
        }
        ,
        quizefinished:(state)=>{
            state.isQuizFinished=!state.isQuizFinished;
        }

      }
 })

export default  quizeslice.reducer;
   export const{addItem1, addItem2, addscore, timeractive, quizefinished}=quizeslice.actions;