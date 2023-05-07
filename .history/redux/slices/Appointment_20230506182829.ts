import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";

export interface AppointmentState {
    appointements: [],
}

const initialState: AppointmentState = {
    appointements: [],
}




const appointmentsSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers : {
        createAppointment (state, action ){
            state.push(action.payload)
        }
    }
})


export const createAppointment = appointmentsSlice.actions
export default appointmentsSlice.reducer