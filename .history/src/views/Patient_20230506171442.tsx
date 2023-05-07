import React, { useState } from 'react'
import ProfileHeader from '../../components/holders/ProfileHeader'
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

    const handleClick = () => {
        alert('clicked ')
    }

    const count: number = 0


    return (
        <>

            <NewPatient isOpen={isOpen} toggle={toggleModal} />

            <section className=" px-10 pt-5 w-full relative">
                <ProfileHeader>
                    <div className="left w-1/2 flex items-center space-x-3">
                        <SearchBar />
                        <AddNew title='New Patient' handleClick={handleClick} />
                    </div>

                    {/* right */}
                    <div className="right flex  items-center space-x-3">

                        <span className='relative group'>
                            <BsFillBellFill className=" cursor-pointer  text-md lg:text-2xl text-gray-300 rotate-[25deg] group-hover:text-gray-400" />
                            <span className=" cursor-pointer absolute -top-1 -right-1  lg:-top-2 lg:-right-2 text-white border-2 border-white  bg-red-400  group-hover:bg-red-600 rounded-full lg:h-5 lg:w-5  flex items-center  justify-center">
                                {count}
                            </span>
                        </span>


                        <ImageWrapper ImageWrapperStyle='' />
                    </div>
                </ProfileHeader>

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
