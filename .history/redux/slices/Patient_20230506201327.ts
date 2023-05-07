import { createSlice } from "@reduxjs/toolkit";
import {RootState} from '../store'
import {PatientState} from '../../typings'




const initialState: PatientState[] = [
    {
        id:'1',
        image: '../profile.jpg',
        name: 'Lexis Alexandra',
        email: 'alex@gmail.com',
        age: '34',
        gender: 'M',
    },
    {
        id:'2',
        image: '../profile.jpg',
        name: 'Ronald Richard',
        email: 'Ronald@outlook.com',
        age: '40',
        gender: 'F',
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
