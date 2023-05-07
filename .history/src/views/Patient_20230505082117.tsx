import React from 'react'
import ProfileHeader from '../../components/holders/ProfileHeader'
import PatientTable from '../../components/tables/PatientsTable'

export default function Patient() {
    return (
        <>
            <section
                className=" px-10 pt-5 w-full relative">
                <ProfileHeader />

                <main className="div mt-10">
                    <h1 className='lg:text-3xl'> Patient</h1>
                    <PatientTable />
                </main>
            </section>
        </>
    )
}
