import { configureStore } from "@reduxjs/toolkit";
import AppointmentReducer from "./slices/Appointment";
import patientsReducer from "./slices/patient";



export const store = configureStore({
    appointment:  AppointmentReducer,
    patient:  patientsReducer,
})