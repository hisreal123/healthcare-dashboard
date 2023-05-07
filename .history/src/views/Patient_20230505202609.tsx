import React, { useState } from 'react'
import ProfileHeader from '../../components/holders/ProfileHeader'
import PatientTable from '../../components/tables/PatientsTable'
import NewPatient from '../../components/modal/NewPatient'

import { Button } from 'reactstrap';

export default function Patient() {

    const [modal, setModal] = useState(false);

    const handleSubmit = () => {
        alert('clicked')
    }


    const [showModal, setShowModal] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>

            <NewPatient isOpen={isOpen} toggle={toggleModal} />

            <section className=" px-10 pt-5 w-full relative">
                <ProfileHeader />

                <main className="div mt-10">
                    <h1 className='lg:text-3xl'> Patient</h1>
                    <PatientTable />
                </main>

                {/* Modal */}
                <Button color="danger" onClick={toggleModal}>
                    Click Me
                </Button>
            </section>
        </>
    )
}
