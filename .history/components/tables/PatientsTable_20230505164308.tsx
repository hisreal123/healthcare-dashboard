import React from 'react'
import { useSelector } from 'react-redux'

type PatientTableProps = {
    patientStyle?: string
}

console.log(allPatients)

export default function PatientTable({ patientStyle }: PatientTableProps) {


    return (
        <>
            <section className={`${patientStyle} mt-10 bg-white shadow-lg`}>
                <h1> Patient tables ..</h1>
            </section>
        </>
    )
}
