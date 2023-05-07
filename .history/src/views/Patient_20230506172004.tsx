import React, { useState } from 'react'
import ProfileHeader, { ImageWrapper } from '../../components/holders/ProfileHeader'
import PatientTable from '../../components/tables/PatientsTable'
import NewPatient from '../../components/modal/NewPatient'

import { Button } from 'reactstrap';
import SearchBar from '../../components/Misc/SearchBar';
import AddNew from '../../components/Misc/AddButton';
import { BsFillBellFill } from 'react-icons/bs';

export default function Patient() {

    const [modal, setModal] = useState(false);

    const handleSubmit = () => {
        alert('clicked')
    }


    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>

            {/* modal */}
            <NewPatient isOpen={isOpen} toggle={toggleModal} />

            {/* patienBody */}
            <section className=" px-10 pt-5 w-full relative">
                <ProfileHeader>
                    {/* modal toggler*/}
                    <AddNew title='New Patient' handleClick={toggleModal} />
                </ProfileHeader>

                <main className="div mt-10">
                    <h1 className='lg:text-3xl'> Patient</h1>
                    <PatientTable />
                </main>


            </section>
        </>
    )
}
