import React from 'react'
import { useSelector } from 'react-redux'

type PatientTableProps = {
    patientStyle?: string
}



export default function PatientTable({ patientStyle }: PatientTableProps) {


    const patient  = useSelector((state) => state.patients)
    conso
    return (
        <>
            <section className={`${patientStyle} mt-10 bg-white shadow-lg`}>
                <h1> Patient tables ..</h1>
            </section>
        </>
    )
}
