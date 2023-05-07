import { createSlice } from "@reduxjs/toolkit";
import {RootState} from '../store'

export interface PatientState {
    id: string,
    image: string,
    name: string,
    gender: string
    age: string
    email: string
}


const initialState: PatientState[] = [
    {
        id:'1',
        image: '../profile.jpg',
        name: 'Lexis Alexandra',
        email: 'alex@gmail.com',
        gender: 'M',
        age: '34',
    },
    {
        id:'2',
        image: '../profile.jpg',
        name: 'Ronald Richard',
        email: 'Ronald@outlook.com',
        gender: 'F',
        age: '40',
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
