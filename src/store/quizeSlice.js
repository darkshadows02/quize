import { createSlice } from "@reduxjs/toolkit";
import Showscorecard from "../Showscorecard";
 const quizeslice=createSlice({
      name:'quize',
      initialState:{
        items1:[],
        items2:[],
        score:0,
        isTimerActive:false,
        isQuizFinished:false,
        countquestionforscore:{},
        Showscorefinal:true
      },
      reducers:{
        addItem1:(state, action)=>{
            state.items1.push(action.payload)
        },
        addItem2:(state, action)=>{
          state.items2.push(action.payload)
        },
        addscore:(state, action)=>{
              if(state.countquestionforscore[action.payload]){
               state.countquestionforscore[action.payload]= ++state.countquestionforscore[action.payload];
          } else{
                state.score+=10;
                state.countquestionforscore[action.payload]= 1;
          }
        },
        timeractive:(state)=>{
          state.isTimerActive=!state.isTimerActive
        }
        ,
        quizefinished:(state)=>{
            state.isQuizFinished=!state.isQuizFinished;
        },
        Showscore:(state)=>{
          state.Showscorefinal=false;
        }

      }
 })

export default  quizeslice.reducer;
   export const{addItem1, addItem2, addscore, timeractive, quizefinished, Showscore}=quizeslice.actions;