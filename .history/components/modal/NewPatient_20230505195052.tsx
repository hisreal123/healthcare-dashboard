import React from 'react'

type NewPatientProps = {
    handleSubmit: any
}
export default function NewPatient({ handleSubmit }: NewPatientProps) {
    return (
        <>
            <section className="z-10 absolute top-0 left-0 right-0 bott   ">
                {/* Display under modal */}
                <div className="darked absolute top-0 bottom-0 right-0 left-0 bg-black/20 "> </div>

                <div className="modal">
                    <form action="" onSubmit={handleSubmit}>
                        <p> lorem ipsum</p>
                    </form>
                </div>
            </section>
        </>
    )
}
