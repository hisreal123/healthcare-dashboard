import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { selectAllPatient } from '../../redux/slices/Patient'

type PatientTableProps = {
    patientStyle?: string
}


export default function PatientTable({ patientStyle }: PatientTableProps) {


    const patients = useSelector(selectAllPatient);
    console.log(patients)


    const PatientList = patients.map((patient, index) => {
        return (
            <>
                <section key={index}>
                    <p>{patient.name}</p>
                </section>
            </>
        )
    })

    return (
        <>
            <section className={`${patientStyle} mt-10 bg-white shadow-lg`}>
                <h1> Patient tables ..</h1>

                {Patien}
            </section>
        </>
    )
}