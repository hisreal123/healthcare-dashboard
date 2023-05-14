import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllDoctor } from '../../redux/slices/Doctor'
import { ImageWrapper } from '../holders/ProfileHeader'
import { Doctor } from '../../../typings'

type DoctorState = Doctor[];


type DoctorTableProps = {
    doctorStyle?: React.CSSProperties,
    handleToggle: any
}


export default function DoctorTable({ doctorStyle, handleToggle }: DoctorTableProps) {

    const doctors: DoctorState = useSelector(selectAllDoctor);
    console.log(doctors)


    const DoctorState = doctors.map((doctor: Doctor, index: number) => {
        return (
            <>
                <tbody key={index} className=" relative">
                    <tr key={index}>
                        <td className='flex items-center space-x-2 py-2 px-2'>

                            <ImageWrapper ImageWrapperStyle='h-4 w-4 block' />

                            <a href=''>
                                {doctor.name}
                            </a>
                        </td>
                        <td>{doctor.email}</td>
                        <td>{doctor.age}</td>
                        <td>{doctor.gender}</td>
                        <td>{doctor.specialty}</td>
                        <td className="cursor-pointer hover:font-bold" onClick={handleToggle}>Update</td>
                    </tr>
                </tbody>
            </>
        )
    })


    return (
        <>
            <section className={`${doctorStyle} mt-10 bg-white shadow-lg relative`}>
                {/* <h1> Patient tables ..</h1> */}
                <table className="relative w-full">
                    <thead className="">
                        <tr className='border-b bg-red-300'>
                            <th className=" py-2 pl-2">Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {DoctorState}
                </table>
            </section>
        </>
    )
}
