import React from 'react'



type AppointmentTableProps = {
    tableStyle: string
}


export default function Appointement({ tableStyle} : AppointmentTableProps) {
    return (
        <>
            <section className={`${table}`}>
                <h1> Appointement tables ..</h1>
            </section>
        </>
    )
}
