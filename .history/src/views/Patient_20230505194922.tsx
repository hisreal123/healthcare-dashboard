import React from 'react'
import ProfileHeader from '../../components/holders/ProfileHeader'
import PatientTable from '../../components/tables/PatientsTable'
import NewPatient from '../../components/modal/NewPatient'

export default function Patient() {


    const handleClick = () => {
        alert('clicked')
    }
    return (
        <>
            <section
                className=" px-10 pt-5 w-full relative">
                <ProfileHeader />

                <main className="div mt-10">
                    <h1 className='lg:text-3xl'> Patient</h1>
                    <PatientTable />
                </main>

                {/* Modal */}
                <NewPatient handleSubmit={handleSubmit} />
            </section>
        </>
    )
}
