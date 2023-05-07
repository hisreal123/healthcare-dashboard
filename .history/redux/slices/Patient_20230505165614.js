import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Patient {
  id: string;
  image: string;
  name: string;
  gender: 'M' | 'F'; // Using a union type to limit possible values
  age: number;
  email: string;
}

interface PatientsState extends Array<Patient> {}

const initialState: PatientsState = [
  {
    id: '1',
    image: '../profile.jpg',
    name: 'Lexis Alexandra',
    gender: 'M',
    age: 34,
    email: 'alex@gmail.com',
  },
  {
    id: '2',
    image: '../profile.jpg',
    name: 'Ronald Richard',
    gender: 'F',
    age: 40,
    email: 'Ronald@outlook.com',
  },
];

const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    addPatient: (state, action: PayloadAction<Patient>) => {
      state.push(action.payload);
    },
  },
});

// allPatient
export const selectAllPatient = (state:) =>
  state.patients;
export const { addPatient } = patientsSlice.actions;
export default patientsSlice.reducer;
