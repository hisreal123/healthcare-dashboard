import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import {RootState} from '../store.ts'
import axios from 'axios';
import {Person} from '../../../typings'


type PatientState  =  {
    data : Person[],
    status: string
    error: null 
};

const initialState: PatientState  = {
    data: [],
    status : 'idle',
    error: null,
}



//  fetching data
export const fetchedPatient= createAsyncThunk('patients/fetchPatients', async () => {
    try{
        const response = await axios.get('https://dummyjson.com/users')
       return response.data
    } catch (message){
        return message
    }
})
//  AddingNewData

export const addNewPatient = createAsyncThunk('patient/addPatient', async(initialState)=>{
    try {
        const response = await axios.post('https://dummyjson.com/users', initialState)
        return response.data
    }catch (message) {
        return message
    }
})

/* 
            Updating api
*/ 
const patientsSlice = createSlice({
    name: 'patients',
    initialState,
    reducers: {
        addPatient(state, action) {
            // @ts-ignore
            state.data[0].push(action.payload);
            console.log(action.payload)
        },
    },
    extraReducers  : (builder) => {
        builder
            .addCase(fetchedPatient.pending, (state, action) => {
            state.status  = 'loading'
            console.log('loading ....')
            console.log(action.payload)

        })
        .addCase(fetchedPatient.fulfilled, (state, action) => {
            state.status  = 'succeeded'
            state.data.push(action.payload.users)
            console.log('Success....')
        })
        .addCase(fetchedPatient.rejected, (state, action) => {
            state.status  = 'failed'
            console.log(action.payload)
        })
        .addCase(addNewPatient.fulfilled, (state,action) => {
                console.log(action.payload.id)
                // @ts-ignore
                state.data[0].push(action.payload)
            })
    }
});




export const selectAllPatient = (state: RootState ) => state.patients.data[0];
export const getPatientStatus = (state: RootState ) => state.patients.status;
export const getPatientError = (state: RootState ) => state.patients.error;

export const {addPatient } = patientsSlice.actions;
export default patientsSlice.reducer
