
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { nanoid } from 'nanoid';
import { addDoctor } from '../../../redux/slices/Doctor';
// import axios from 'axios';


export default function NewDoctor(args: any) {

    const [name, setName] = useState<string>('')
    const [age, setAge] = useState<number>(0)
    const [email, setEmail] = useState<string>('')
    const [gender, setGender] = useState<string>('')
    const [spec, setSpec] = useState<string>('')


    const dispatch = useDispatch();

    // for modal 
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    // convert age toString
    const convertAge: string = age.toString()

    // allDetails checker
    const allCheck = name && convertAge && email && gender && spec

    const handleSubmit = (e: any) => {
        e.preventDefault()

        if (allCheck) {
            dispatch(addDoctor({
                id: nanoid(),
                name: name,
                email: email,
                age: age,
                gender: gender,
                specialty: spec
            }))
        }
        // reset Inputs
        setName('')
        setAge(0)
        setEmail('')
        setGender('')
        setSpec('')

    }

    return (
        <>

            <Modal isOpen={modal} toggle={toggle} {...args} className='rounded-none' >
                <ModalHeader toggle={toggle}>New Doctor</ModalHeader>
                <ModalBody>
                    {/* Html5 form  */}
                    <form onSubmit={handleSubmit}>

                        {/* reactstrap input blablabla */}

                        <Label for="Name">
                            Name
                        </Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Enter Name"
                            type="text"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                            required
                        />
                        <Label for="DoctorEmail">
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
                                M
                            </option>
                            <option>
                                F
                            </option>

                        </Input>

                        <Label for="Specialty">
                            spec
                        </Label>
                        <Input
                            id="spec"
                            name="spec"
                            placeholder="Area of Specification"
                            type='text'
                            value={spec}
                            onChange={(e) => { setSpec(e.target.value) }}
                            required
                        />


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