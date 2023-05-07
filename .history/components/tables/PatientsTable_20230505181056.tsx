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
                <section key={index}>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Gender</th>
                        </tr>
                        <tr>
                            <td>{patient.name}</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>
                    </table>
                </section>
            </>
        )
    })


    return (
        <>
            <section className={`${patientStyle} mt-10 bg-white shadow-lg`}>
                <h1> Patient tables ..</h1>
                {PatientList}
            </section>
        </>
    )
}
