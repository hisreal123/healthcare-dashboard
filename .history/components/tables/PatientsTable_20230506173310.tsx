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
                <tbody key={index} className=" relative">
                    <tr key={index}>
                        <td className='flex item-center space-x-2'>
                            <ImageWrapper ImageWrapperStyle='h-4 w'/>
                            <span>
                                {patient.name}
                            </span>
                        </td>
                        <td>{patient.email}</td>
                        <td>{patient.age}</td>
                        <td>{patient.gender}</td>
                    </tr>
                </tbody>
            </>
        )
    })


    return (
        <>
            <section className={`${patientStyle} mt-10 bg-white shadow-lg relative`}>
                <h1> Patient tables ..</h1>
                <table className="relative w-full">
                    <thead className="">
                        <tr className='border-b bg-red-300'>
                            <th className=" py-2 pl-2">Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>gender</th>
                        </tr>
                    </thead>
                    {PatientList}
                </table>
            </section>
        </>
    )
}