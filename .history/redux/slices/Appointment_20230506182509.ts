import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";

type AppointmentProps = {
    appointment: []
}

const initialState = [
    appointments: []   
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


export const createAppointment = appointmentsSlice.actions
export default appointmentsSlice.reducer