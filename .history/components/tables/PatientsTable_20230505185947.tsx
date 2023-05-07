import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { selectAllPatient } from '../../redux/slices/Patient'
import { ImageWrapper } from '../holders/ProfileHeader'


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
                    <td className='flex item-center space-x-2'>
                        <ImageWrapper />
                        <span>
                            {patient.name}
                        </span>
                    </td>
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
                <div className="wrap px-2 w-full">
                    <table className="w-full relative">
                        <tr className="min:w-full justify-between flex relative bg-red-600">
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Gender</th>
                        </tr>
                        <tbody className='bg-red-400'>
                            {PatientList}
                        </tbody>
                    </table>
                </div>
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
