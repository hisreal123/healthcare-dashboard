import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";

interface AppointmentState {
    appointements: [],
}

const initialState: AppointmentState = {
    appointments: [],
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