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
                <tr key={index}>
                    <td>{patient.name}</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
            </>
        )
    })


    return (
        <>
            <section className={`${patientStyle} mt-10 bg-white shadow-lg`}>
                <h1> Patient tables ..</h1>
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Email</th>

                    </thead>
                </table>
                {PatientList}
            </section>
        </>
    )
}
