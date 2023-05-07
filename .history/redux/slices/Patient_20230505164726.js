import { createSlice } from "@reduxjs/toolkit";

// const GENDER =  'M' || 'F',

// const userType = {
//     id: String,
//     name: String,
//     gender: String,
//     age: Number,
//     email:String  
// }


const initialState = [
    {
        id:' 1',
        image: '../profile.jpg',
        name: 'Lexis Alexandra',
        gender: 'M',
        age: 34,
        email: 'alex@gmail.com'
},
    {
        id:' 2',
        image: '../profile.jpg',
        name: 'Ronald Richard',
        gender: 'F',
        age: 40,
        email: 'Ronald@outlook.com'
},
]



const patientsSlice = createSlice({
    name: 'patients',
    initialState,
    reducers : {
        addPatient( state, action) {
            state.push(action.payload)
        }
    }
})



// allPatient
export const allPatients = (state) => state.patients
export const allPatients = (state) => state.patients
export default patientsSlice.reducer