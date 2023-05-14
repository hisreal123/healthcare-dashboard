import React, { useState } from 'react'
import PatientTable from '../../components/tables/PatientsTable'
import NewPatient from '../../components/modal/patient/NewPatient'
import AddNew from '../../components/Misc/AddButton';
import SearchBar from '../../components/Misc/SearchBar'





const Patient: React.FC = () => {
    // modal toggle states
    const [isOpen, setIsOpen] = useState(false);
    /*   const [openUpdate, setOpenUpdate] = useState(false); */

    const toggleModal = ()  : void  => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=''>
            {/* modal */}
            <NewPatient isOpen={isOpen} toggle={toggleModal} />

            {/* patientBody */}
            <section className=" px-2 lg:px-10 w-full relative flex flex-col ">
                <div className='lg:w-full space-x-2 flex items-center relative mx-auto '>
                    <SearchBar SearchInputStyle=" " />
                    <div className='relative '>
                        <AddNew title='New Patient' handleClick={toggleModal} btnStyle="" />
                    </div>
                </div>

                <main className="div">
                    <h1 className='text-lg lg:text-3xl font-bold py-2 '> Patient</h1>
                    <PatientTable />
                </main>
            </section>
        </div>
    );
}


export default Patient
