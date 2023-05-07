import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { selectAllPatient } from '../../redux/slices/Patient'

type PatientTableProps = {
    patientStyle?: string
}


export default function PatientTable({ patientStyle }: PatientTableProps) {


    const patients: any = useSelector(selectAllPatient);
    console.log(patients)


    const PatientList = patients.map((patient: any, index: number) => {
        return (
            <>
                <table>
                    <tr key={index}>
                        <td>{patient.name}</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                </table>
            </>
        )
    })


    return (
        <>
            <section className={`${patientStyle} mt-10 bg-white shadow-lg`}>
                <h1> Patient tables ..</h1>
                {PatientList}
                                        <tr>
                        </tr>

            </section>
        </>
    )
}
