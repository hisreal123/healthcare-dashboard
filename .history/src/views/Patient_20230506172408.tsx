import { useState } from 'react'
import ProfileHeader from '../../components/holders/ProfileHeader'
import PatientTable from '../../components/tables/PatientsTable'
import NewPatient from '../../components/modal/NewPatient'
import AddNew from '../../components/Misc/AddButton';

export default function Patient() {


    const handleSubmit = () => {
        alert('clicked')
    }


    // modal toggler 
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
