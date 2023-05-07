import { configureStore } from "@reduxjs/toolkit";
import AppointmentReducer from "./slices/Appointment";
import patientsReducer from "./slices/patient";



const store = configureStore({

    appointment:  AppointmentReducer,
    users:  patientsReducer,
})