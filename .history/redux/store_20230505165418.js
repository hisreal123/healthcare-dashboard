import { configureStore } from "@reduxjs/toolkit";
import AppointmentReducer from "./slices/Appointment";
import patientsSlice.reducer from "./slices/Patient";



const store = configureStore({
    reducer : {
        appointment:  AppointmentReducer,
        patient:  patientsReducer,
    }
})


export default store 