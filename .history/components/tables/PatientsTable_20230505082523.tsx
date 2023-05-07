import React from 'react'
import { useSelector } from 'react-redux'
import {AllPatient} from '../../'

type PatientTableProps = {
    patientStyle?: string
}


export default function PatientTable({ patientStyle }: PatientTableProps) {

    const patient = useSelector(AllPatient)
    return (
        <>
            <section className={`${patientStyle} mt-10 bg-white shadow-lg`}>
                <h1> Patient tables ..</h1>
            </section>
        </>
    )
}
