import React from 'react'
import ProfileHeader from '../../components/holders/ProfileHeader'
import {p}

function Appointment() {
    return (
        <>
            <section
                className=" px-10 pt-5 w-full relative">
                <ProfileHeader />

                <main className="div mt-10">
                    <h1 className='lg:text-3xl'> Appointment</h1>
                    <AppointmentTable />
                </main>
            </section>
        </>
    )
}

export default Appointment
