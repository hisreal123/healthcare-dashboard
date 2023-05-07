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
                    <td>{patient.email}</td>
                    <td>{patient.age}</td>
                    <td>{patient.gender}</td>
                </tr>
            </>
        )
    })

    const PTable = () => {
        return (
            <>
                <table className="w-full  ">
                    <thead>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Gender</th>
                    </thead>
                    <tbody>
                        {PatientList}
                    </tbody>
                </table>
            </>
        )
    }


    return (
        <>
            <section className={`${patientStyle} mt-10 bg-white shadow-lg`}>
                <h1> Patient tables ..</h1>
                <PTable />
            </section>
        </>
    )
}
