import { createSlice } from "@reduxjs/toolkit";


const userType = {
    id: String,
    name: String,
    gender: String,
    age: Number,
    email:String  
}


const initialState : userType[]= [
    {
        id:' 1',
        name: 'Lexilie Alexandra',
        gender: 'M',
        age: 34,
        email: 'alex@gmail.com'
},
    {
        id:' 2',
        name: 'Ronald Richard',
        gender: 'F',
        age: 40,
        email: 'Ronald@outlook.com'
},
]