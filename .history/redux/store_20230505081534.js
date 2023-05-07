import { configureStore } from "@reduxjs/toolkit";
import AppointmentReducer from "./slices/Appointment";
import patientsReducer from "./slices/User";



const store = configureStore({

    appointment:  AppointmentReducer,
    users:  patientsReducer,
})