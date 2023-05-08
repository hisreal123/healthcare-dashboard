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
           secti
        </div>
    );
}
