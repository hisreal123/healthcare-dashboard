import React from 'react'



type PatienrTableProps = {
    tableStyle?: string
}


export default function Patient({ tableStyle }:PatienrTableProps) {
    return (
        <>
            <section className={`${tableStyle} mt-10 bg-white shadow-lg`}>
                <h1> Patient tables ..</h1>
            </section>
        </>
    )
}
