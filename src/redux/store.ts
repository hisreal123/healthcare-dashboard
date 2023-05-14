import { configureStore } from "@reduxjs/toolkit";
import AppointmentReducer from "./slices/Appointment"
import patientsReducer from "./slices/Patient";
import doctorsReducer from "./slices/Doctor";



const store = configureStore({
    reducer : {
        appointments:  AppointmentReducer,
        patients:  patientsReducer,
        doctors : doctorsReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export default store 