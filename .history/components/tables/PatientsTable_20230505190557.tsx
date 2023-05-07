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
                <tr key={index} className="flex-1 w-full flex relative justify-between">
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
                <table className="relative w-full bg-red-400 inline-block">
                    <tr className='flex-1 w-full bg-red-100 flex relative justify-between'>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>gender</th>
                    </tr>
                    {PatientList}
                </table>
            </>
        )
    }


    return (
        <>
            <section className={`${patientStyle} mt-10 bg-white shadow-lg relative`}>
                <h1> Patient tables ..</h1>
                <PTable />
            </section>
        </>
    )
}
