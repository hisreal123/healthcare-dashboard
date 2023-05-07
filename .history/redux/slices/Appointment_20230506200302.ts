import { RootState } from '../store'
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";
Appoi


const initialState: AppointmentState = {
    appointements: [],
}




const appointmentsSlice = createSlice({
    name: 'appointements',
    initialState,
    reducers : {
        createAppointment (state, action: PayloadAction<object>){
            state.push(action.payload)
        }
    }
})

const allAppointments = (state: RootState) => state.appointments
export const createAppointment = appointmentsSlice.actions
export default appointmentsSlice.reducer