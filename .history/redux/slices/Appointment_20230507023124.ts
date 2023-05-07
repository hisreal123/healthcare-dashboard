import { RootState } from '../store'
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { sub } from "date-fns";
import {AppointmentState} from '../../typings'


const initialState: AppointmentState = {
    appointments: [],
}


const appointmentsSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers : {
     /*    createAppointment (state, action: PayloadAction<object>){
            state.push(action.payload)
        } */
    }
})

const allAppointments = (state: RootState) => state.appointments
export const createAppointment = appointmentsSlice.actions
export default appointmentsSlice.reducer