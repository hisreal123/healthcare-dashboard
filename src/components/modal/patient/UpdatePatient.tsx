import { useSelector } from "react-redux";
import { selectAllPatient } from "../../../redux/slices/Patient";
import { useParams } from "react-router-dom";
import { RootState } from "../../../redux/store";
import {Input} from "reactstrap";
// import {useState} from "react";

interface Patient {
    id: number;
    firstName: string;
    // add any other properties here
}

function UpdatePatient() : JSX.Element {
    // const [name, setName] = useState<string>('');

    const { id } = useParams<{ id: string }>();
    // const dispatch = useDispatch();
    const patients = useSelector((state: RootState) => selectAllPatient(state));

    // @ts-ignore
    const patient = patients.find((p: Patient) => p.id === parseInt(id));

    const allCheck = true

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(' Ready ')
    }

    return (
        <section className="px-2 lg:px-10 w-full relative flex flex-col">
            <main>
                {patient ? (
                    <section className=' lg:gap-10 lg:grid lg:grid-cols-2'>

                        <div className=''>
                        <div className='my-2 font-bold text-xl text-gray-700/80'> Update Patient </div>
                           <form onSubmit={handleSubmit}>
                               <h1  className='text-gray-600 bg-gray-200 py-2 px-2 rounded-t-md'> Your Name </h1>

                               <div className='bg-gray-200 px-2 pb-4 rounded-b-md  '>
                                   <label  htmlFor='FirstName' className='text-sm mt-3 text-gray-400 '>First Name</label>
                                   <Input
                                       id="Firstname"
                                       name="Firstname"
                                       placeholder="Enter Firstname"
                                       type="text"
                                       value={patient.firstName}
                                       // onChange={(e) => { setFname(e.target.value) }}
                                       required
                                   />

                               <label  htmlFor='Last Name' className='text-sm mt-3 text-gray-400 '>Last Name</label>
                               <Input
                                   id="Lastname"
                                   name="Lastname"
                                   placeholder="Enter Lastname"
                                   type="text"
                                   value={patient.lastName}
                                   // onChange={(e) => { setLname(e.target.value) }}
                                   required
                               />
                               </div>

                               <div className='wrapper lg:grid lg:grid-cols-2  gap-5 overflow-hidden'>

                               <div className='overflow-hidden bg-gray-200 px-2 pb-4 rounded-md mt-3 '  >
                               <label  htmlFor='email' className='text-sm mt-3 text-gray-400 '>Email</label>
                               <Input
                                   id="email"
                                   name="email"
                                   placeholder="Enter Email "
                                   type="email"
                                   value={patient.email}
                                   // onChange={(e) => { setEmail(e.target.value) }}
                                   required
                               />

                               <label  htmlFor='age ' className='text-sm mt-3 text-gray-400 '>Age</label>
                               <Input
                                   id="age"
                                   name="age"
                                   placeholder="Enter Age"
                                   type='number'
                                   value={patient.age}
                                   // onChange={(e) => { setAge(parseInt(e.target.value)) }}
                                   required
                               />
                               </div>


                               <div className='bg-gray-200 px-2 pb-4 rounded-md mt-3'  >

                               <label  htmlFor='BloodGroup' className='text-sm mt-3 text-gray-400 '>Blood Group</label>
                               <Input
                                   id="blg"
                                   name="blg"
                                   placeholder="Enter Blood Group"
                                   type="text"
                                   value={patient.bloodGroup}
                                   // onChange={(e) => { setblg(e.target.value) }}
                                   required
                               />

                               <label  htmlFor='age' className='text-sm mt-3 text-gray-400 '>Age</label>
                               <Input
                                   id="exampleSelect"
                                   name="gender"
                                   type="select"
                                   value={patient.gender}
                                   // onChange={(e) => { setGender(e.target.value) }}
                                   required
                                   placeholder='Pick gender'
                               >
                                   {patient.gender === 'male'?
                                       (<>
                                           <option>{patient.gender}</option>
                                           <option> female</option>
                                       </>):
                                       (<>
                                           <option>{patient.gender}</option>
                                           <option> male</option>
                                       </>)}

                               </Input>
                               </div>
                               </div>

                               <button
                                   type='submit'
                                   className={`${!allCheck ? ' bg-gray-200' : 'bg-[#5282FB] hover:bg-[#0e46d3]'} disabled:cursor-not-allowed  text-white font-light text-lg  mt-3 w-full relative py-2 rounded-sm `}
                                   disabled={!allCheck}
                               >Submit
                               </button>
                           </form>
                        </div>

                        <aside className=''>
                            <button>BACK</button>
                        </aside>
                    </section>
                ) : (
                    <div>
                        <p>Loading...</p>
                    </div>
                )}
            </main>
        </section>
    );
}

export default UpdatePatient;
