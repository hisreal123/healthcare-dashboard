import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPatient } from '../../src/redux/slices/Patient'
import { ImageWrapper } from '../../components/holders/'
import { Patient } from '../../typings'

type PatientState = Patient[];


type PatientTableProps = {
    patientStyle?: React.CSSProperties,
    handleToggle: any
}


export default function PatientTable({ patientStyle, handleToggle }: PatientTableProps) {

    const patients: PatientState = useSelector(selectAllPatient);
    console.log(patients)


    const PatientList = patients.map((patient: Patient, index: number) => {
        return (
            <>
                <tbody key={index} className=" relative">
                    <tr key={index}>
                        <td className='flex items-center space-x-2 py-2 px-2'>

                            <ImageWrapper ImageWrapperStyle='h-4 w-4 block' />

                            <a href=''>
                                {patient.name}
                            </a>
                        </td>
                        <td>{patient.email}</td>
                        <td>{patient.age}</td>
                        <td>{patient.gender}</td>
                        <td className="cursor-pointer hover:font-bold" onClick={handleToggle}>Update</td>
                    </tr>
                </tbody>
            </>
        )
    })


    return (
        <>
            <section className={`${patientStyle} mt-10 bg-white shadow-lg relative`}>
                {/* <h1> Patient tables ..</h1> */}
                <table className="relative w-full">
                    <thead className="">
                        <tr className='border-b bg-red-300'>
                            <th className=" py-2 pl-2">Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {PatientList}
                </table>
            </section>
        </>
    )
}
