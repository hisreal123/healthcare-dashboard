import React from 'react'



type PatientTableProps = {
    tableStyle?: string
}


export default function Patient({ tableStyle }:PatientTableProps) {
    return (
        <>
            <section className={`${tableStyle} mt-10 bg-white shadow-lg`}>
                <h1> Patient tables ..</h1>
            </section>
        </>
    )
}
