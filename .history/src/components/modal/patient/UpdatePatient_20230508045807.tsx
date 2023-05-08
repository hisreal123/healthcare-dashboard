import  { useState } from 'react'
// import { useParams } from 'react-router-dom';

// type UpdateProps = {
//     open?: boolean
//     id?: string
// }



function UpdatePatient() {

    
    const showUpdate= false(false);

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
