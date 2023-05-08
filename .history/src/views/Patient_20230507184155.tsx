import React, { useState } from 'react'
import ProfileHeader from '../../components/holders/ProfileHeader'
import PatientTable from '../../components/tables/PatientsTable'
import NewPatient from '../../components/modal/patient/NewPatient'
import AddNew from '../../components/Misc/AddButton';
import UpdatePatient from '../../components/modal/patient/UpdatePatient';

export function Patient() {

    // modal toggle states
    const [isOpen, setIsOpen] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);


    const handleUpdate = (e: any) => {
        setOpenUpdate(true);
    };

    // modal toggle function
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* modal */}
            <NewPatient isOpen={isOpen} toggle={toggleModal} />

            {/* patientBody */}
            <section className=" px-10 pt-5 w-full relative">
                <ProfileHeader>
                    {/*
                modal toggler &&
                this is the children node for this element
            */}
                    <AddNew title='New Patient' handleClick={toggleModal} />
                </ProfileHeader>

                <main className="div mt-10">
                    <h1 className='lg:text-3xl'> Patient</h1>
                    <PatientTable handleToggle={(e: any) => { setOpenUpdate(!openUpdate); } } />

                    <UpdatePatient open={openUpdate} />
                </main>
                <section />
            </div>
            </>
    );
}
