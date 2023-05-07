import React from 'react'
import { useSelector } from 'react-redux'
import { allPatients } from '../../redux/slices/Patient';

type PatientTableProps = {
    patientStyle?: string
}

console.
export default function PatientTable({ patientStyle }: PatientTableProps) {

    const patient = useSelector(allPatients)
    console.log(patient)


    return (
        <>
            <section className={`${patientStyle} mt-10 bg-white shadow-lg`}>
                <h1> Patient tables ..</h1>
            </section>
        </>
    )
}
