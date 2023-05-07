import { configureStore } from "@reduxjs/toolkit";
import AppointmentReducer from "./slices/Appointment";
import patientsReducer from "./slices/Patient";



const store = configureStore({
    reducer : {
        appointments:  AppointmentReducer,
        patients:  patientsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store 