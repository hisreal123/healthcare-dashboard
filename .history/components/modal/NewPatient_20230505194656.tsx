import React from 'react'

type NewPatientProps = {
    handeSubmit : any
}
export default function NewPatient({handleSubmit}) {
    return (
        <>
            <section>
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
