// import React from 'react'
import AppointmentTable from '../components/tables/AppointmentTable'

function Appointment() {
    return (
        <>
            <section
                className="  px-2 lg:px-10 w-full relative flex flex-col ">
                <main className="div mt-10">
                    <h1 className='lg:text-3xl'> Appointment</h1>

                    <AppointmentTable />
                </main>
            </section>
        </>
    )
}

export default Appointment
