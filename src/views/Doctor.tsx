import { useState } from 'react'
// import ProfileHeader from '../components/holders/ProfileHeader'
import DoctorTable from '../components/tables/DoctorTable'
import NewDoctor from '../components/modal/doctor/NewDoctor'
import AddNew from '../components/Misc/AddButton';

const Doctor  = () => {

  // modal toggle states
  const [isOpen, setIsOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);


  /*   const handleUpdate = (e: any) => {
        setOpenUpdate(true);
    }; */

  // modal toggle function
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* modal */}
      <NewDoctor isOpen={isOpen} toggle={toggleModal} />

      {/* patientBody */}
      <section className=" px-10 pt-5 w-full relative">
        
      <AddNew title='New Patient' handleClick={toggleModal} />

        <main className="div mt-10">
          <h1 className='lg:text-3xl'> Doctor(s)</h1>
          <DoctorTable handleToggle={() => { setOpenUpdate(!openUpdate); }} />

        </main>

      </section>
    </div>
  );
}


export default Doctor