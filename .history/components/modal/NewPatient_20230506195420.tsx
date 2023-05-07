
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { selectAllPatient, addPatient } from '../../redux/slices/Patient'
import { nanoid } from 'nanoid';

export default function NewPatient(args: any) {

    const [name, setName] = useState<string>('')
    const [age, setAge] = useState<number>(0)
    const [email, setEmail] = useState<string>('')
    const [gender, setGender] = useState<string>('')

    // redux tools to access store and states
    const patients = useSelector(selectAllPatient);
    const dispatch = useDispatch();

    // for modal 
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    // convert age toString
    const convertAge: string = age.toString()

    // allDetails checker
    const allCheck = name && convertAge && email && gender

    const handleSubmit = (e: any) => {
        e.preventDefault()

        if (allCheck) {
            dispatch(addPatient({
                id: nanoid(),
                name: name,
                email: email,
                age: age,
                gender: gender
            }))
        }


        // reset Inputs
        setName('')
        setAge(0)
        setEmail('')
        setGender('')

    }

    return (
        <>

            <Modal isOpen={modal} toggle={toggle} {...args} className='rounded-none' >
                <ModalHeader toggle={toggle}>New Patient</ModalHeader>
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
                        <button
                            type='submit'
                            className={`disabled:cursor-not-allowed disabled:hover:bg-gray-200 text-white font-light text-lg bg-[#5282FB] hover:bg-[#0e46d3] mt-3 w-full relative py-2 rounded-sm `}
                            disabled={!allCheck ? true : false }
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
