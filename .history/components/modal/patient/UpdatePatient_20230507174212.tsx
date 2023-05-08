import React, { useState } from 'react'


type UpdateProps = {
    open?: boolean
}


function UpdatePatient({ open }: UpdateProps) {

    let showUpdate = false;

    if(showUpdate ===)

    return (
        <>
            {
                showUpdate && (
                    <section className=' translate-y-32 translate-x-[60%] absolute  bottom-0 top-0  w-1/2 bg-white '>
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
