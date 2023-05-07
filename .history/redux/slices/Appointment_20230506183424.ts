import { RootState } from '../store'
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";

export interface AppointmentState {
    appointements: [],
}

const initialState: AppointmentState = {
    appointements: [],
}




const appointmentsSlice = createSlice({
    name: 'appointements',
    initialState,
    reducers : {
        createAppointment (state, action: PayloadActionadAction<{}>){
            state.push(action.payload)
        }
    }
})

const allAppointments = (state: RootState) => state.appointments
export const createAppointment = appointmentsSlice.actions
export default appointmentsSlice.reducer