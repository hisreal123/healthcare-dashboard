import { configureStore } from "@reduxjs/toolkit";
import AppointmentReducer from "./slices/Appointment";
import patientsReducer from "./slices/Patient";



// const store = configureStore({
//     reducer : {
//         appointment:  AppointmentReducer,
//         patient:  patientsReducer,
//     }
// })


export default store 