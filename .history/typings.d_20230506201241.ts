
//Appointments Slice
export interface AppointmentState {
    appointments: [],
}


interface Patient {
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