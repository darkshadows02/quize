import { configureStore } from "@reduxjs/toolkit";
import quizeReducer from "./quizeSlice"

const appstore=configureStore({
    reducer:{
        quize:quizeReducer
    }
});
export default appstore;
