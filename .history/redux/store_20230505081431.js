import { configureStore } from "@reduxjs/toolkit";
import AppointmentReducer from "./slices/Appointment";
import UserReducer from "./slices/User";



const store = configureStore({

    appointment:  UserReducer
    users:  UserReducer
})