import React from 'react'



type AppointmentTableProps = {
    tableStyle?: string
}


export default function Patient({ tableStyle }: AppointmentTableProps) {
    return (
        <>
            <section className={`${tableStyle} mt-10 bg-white shadow-lg`}>
                <h1> Patient tables ..</h1>
            </section>
        </>
    )
}
