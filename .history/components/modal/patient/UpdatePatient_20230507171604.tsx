import React, {useState} from 'react'


type UpdateProps = {
    open: boolean
}


function UpdatePatient({open}: upd) {

    const [showUpdate, setShowUpdate] = useState<boolean>(open)

    return (
        <>
            {
                showUpdate && (
            <section className='absolute top-0 bottom-0 bg-white '>
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