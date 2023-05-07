import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";

// const GENDER =  'M' || 'F',

// const userType = {
//     id: String,
//     name: String,
//     gender: String,
//     age: Number,
//     email:String  
// }


const initialState = [
   
]



const appointmentsSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers : {
        createAppointment (state, action ){
            state.push(action.payload)
        }
    }
})

export default appointmentsSlice.reducer