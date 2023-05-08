import React, { useState } from 'react'


type UpdateProps = {
    open?: boolean
}


function UpdatePatient({ open }: UpdateProps) {

    const [showUpdate, setShowUpdate] = useState<boolean>(true)

    return (
        <>
            {
                showUpdate && (
                    <section className=' z-10 absolute top-0 w-1/2 bg-white '>
                        <div className="">
                            <h1 className='text-4xl'>
                                Update Patient
                            </h1>
                        </div>
                    </section>
                )
            }
        </>
    )
}

export default UpdatePatient
