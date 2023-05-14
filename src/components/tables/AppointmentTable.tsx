// import React from 'react'
import Loader from "../Misc/Loader.tsx";


type AppointmentTableProps = {
    tableStyle?: string
}


export default function Appointement({ tableStyle }: AppointmentTableProps) {
    return (
        <>
            <section className={`${tableStyle} mt-10 bg-white shadow-lg`}>
                <h1> Appointement tables ..</h1>
                <Loader />
            </section>
        </>
    )
}
