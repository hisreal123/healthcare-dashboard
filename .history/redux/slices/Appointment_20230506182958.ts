import { RootState } from './../../.history/redux/store_20230506181606';
import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";
RootState
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
        createAppointment (state, action ){
            state.push(action.payload)
        }
    }
})


export const createAppointment = appointmentsSlice.actions
export default appointmentsSlice.reducer