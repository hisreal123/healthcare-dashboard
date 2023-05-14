
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { addPatient } from '../../../redux/slices/Patient'
import { nanoid } from 'nanoid';


import sha1 from 'crypto-js/sha1';

export default function NewPatient(args: any) {

    const [fname, setFname] = useState<string>('')
    const [lname, setLname] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [age, setAge] = useState<number>(0)
    const [blg, setblg] = useState<string>('')
    const [gender, setGender] = useState<string>('')


    const dispatch = useDispatch();

    // for modal
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    // convert age toString
    const convertAge: string = age.toString()

    // allDetails checker
    const allCheck = Boolean(fname) && Boolean(lname) && Boolean(convertAge) && Boolean(email) && Boolean(gender)

    // image
    // firstName
    // lastName
    // email
    // age
    // bloodGroup
    // gender


    const handleSubmit = (e: any) => {
        e.preventDefault()

        if (allCheck) {
            dispatch(addPatient({
                id: parseInt(sha1(nanoid()).toString().slice(0, 8), 8) + 30,
                firstName: fname,
                lastName: lname,
                email: email,
                age: age,
                gender: gender,
                bloodGroup: blg
            }))
            }
        // reset Inputs

        setFname('')
        setLname('')
        setEmail('')
        setAge(0)
        setblg('')
        setGender('')
    }

    return (
        <>
            <Modal isOpen={modal} toggle={toggle} {...args} className='rounded-none' >
                <ModalHeader toggle={toggle}>New Patient</ModalHeader>
                <ModalBody>
                    {/* Html5 form  */}
                    <form onSubmit={handleSubmit}>
                        {/* reactstrap input  */}
                        <Label for="Name">
                            First Name
                        </Label>
                        <Input
                            id="Firstname"
                            name="Firstname"
                            placeholder="Enter Firstname"
                            type="text"
                            value={fname}
                            onChange={(e) => { setFname(e.target.value) }}
                            required
                        />
                        <Label for="Name">
                            Last Name{/*  */}
                        </Label>
                        <Input
                            id="Lastname"
                            name="Lastname"
                            placeholder="Enter Lastname"
                            type="text"
                            value={lname}
                            onChange={(e) => { setLname(e.target.value) }}
                            required
                        />
                        <Label for="PatientEmail">
                            Email
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="Enter Email "
                            type="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            required
                        />
                        <Label for="age">
                            Age
                        </Label>
                        <Input
                            id="age"
                            name="age"
                            placeholder="Enter Age"
                            type='number'
                            value={age}
                            onChange={(e) => { setAge(parseInt(e.target.value)) }}
                            required
                        />
                        <Label for="Name">
                            Blood Group
                        </Label>
                        <Input
                            id="blg"
                            name="blg"
                            placeholder="Enter Blood Group"
                            type="text"
                            value={blg}
                            onChange={(e) => { setblg(e.target.value) }}
                            required
                        />
                        <Label for="gender">
                            Gender
                        </Label>
                        <Input
                            id="exampleSelect"
                            name="gender"
                            type="select"
                            value={gender}
                            onChange={(e) => { setGender(e.target.value) }}
                            required
                            placeholder='Pick gender'
                        >
                            <option>

                            </option>
                            <option>
                                Male
                            </option>
                            <option>
                                Female
                            </option>

                        </Input>
                        <button
                            type='submit'
                            className={`${!allCheck ? ' bg-gray-200' : 'bg-[#5282FB] hover:bg-[#0e46d3]'} disabled:cursor-not-allowed  text-white font-light text-lg  mt-3 w-full relative py-2 rounded-sm `}
                            disabled={!allCheck}
                        >Submit
                        </button>
                    </form>
                </ModalBody>
                {/*   <ModalFooter>
                </ModalFooter> */}
            </Modal>
        </>
    )
}