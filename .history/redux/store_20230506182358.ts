import { configureStore } from "@reduxjs/toolkit";
import AppointmentReducer from "./"
import patientsReducer from "./slices/Patient";



const store = configureStore({
    reducer : {
        appointments:  AppointmentReducer,
        patients:  patientsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store 