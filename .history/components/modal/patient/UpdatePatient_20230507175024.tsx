import React, { useState } from 'react'


type UpdateProps = {
    setOpen?: boolean
}


function UpdatePatient({ setOpen }: UpdateProps) {

    const [showUpdate, setShowUpdate] = useState(false);



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
