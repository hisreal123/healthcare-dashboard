import { createSlice } from "@reduxjs/toolkit";
import {RootState} from '../store'
import initialState from "../../data/views/DoctorFk";

const doctorsSlice = createSlice({
    name: 'doctors',
    initialState,
    reducers: {
        addDoctor(state, action) {
            state.push(action.payload);
        },
    },
});

export const selectAllDoctor = (state: RootState) => state.doctors;
export const { addDoctor } = doctorsSlice.actions;
export default doctorsSlice.reducer;
