
//Appointments Slice
export interface AppointmentState {
    appointments: [],
}


export interface Patient {
    id: string,
    image: string,
    name: string,
    gender: string
    age: string
    email: string
}

export interface PatientState {
    id: string,
    image: string,
    name: string,
    gender: string
    age: string
    email: string
}