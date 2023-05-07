import React from 'react'



type AppointmentTableProps = {
    tableStyle: string
}


export default function Appointement({ tableStyle }: AppointmentTableProps) {
    return (
        <>
            <section className={`${tableStyle} mt-10 bg-white shadow-lg`}>
                <h1> Appointement tables ..</h1>
            </section>
        </>
    )
}
