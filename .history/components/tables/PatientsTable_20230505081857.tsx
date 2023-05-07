import React from 'react'



type PatientTableProps = {
    patientyle?: string
}


export default function Patient({ patientStyle }: PatientTableProps) {
    return (
        <>
            <section className={`${patientStyle} mt-10 bg-white shadow-lg`}>
                <h1> Patient tables ..</h1>
            </section>
        </>
    )
}
