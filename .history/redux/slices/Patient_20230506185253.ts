import { createSlice } from "@reduxjs/toolkit";
import {RootState} from '../store'

export interface 
const initialState = [
    {
        id:'1',
        image: '../profile.jpg',
        name: 'Lexis Alexandra',
        gender: 'M',
        age: 34,
        email: 'alex@gmail.com'
    },
    {
        id:'2',
        image: '../profile.jpg',
        name: 'Ronald Richard',
        gender: 'F',
        age: 40,
        email: 'Ronald@outlook.com'
    },
];

const patientsSlice = createSlice({
    name: 'patients',
    initialState,
    reducers: {
        addPatient(state, action) {
            state.push(action.payload);
        },
    },
});

export const selectAllPatient = (state: RootState) => state.patients;
export const { addPatient } = patientsSlice.actions;
export default patientsSlice.reducer;
