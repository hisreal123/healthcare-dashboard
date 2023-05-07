
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { selectAllPatient } from '../../redux/slices/Patient'

export default function NewPatient(args: any) {

    const [name, setName] = useState<string>('')
    const [age, setAge] = useState<number>(0)
    const [email, setEmail] = useState<string>('')
    const [gender, setGender] = useState<string>('')


    const patients = useSelector(selectAllPatient);

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    // convert age toString
    const convertAge = age.toString()

    // allDetails checker
    const allCheck = name && age && email && gender

    const handleSubmit = (e: any) => {
        e.preventDefault()


        alert(typeof convertAge )


    }

    return (
        <>

            <Modal isOpen={modal} toggle={toggle} {...args} >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
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
                            onChange={(e) => { setAge(e.target.value) }}
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
                        >
                            <option>
                                M
                            </option>
                            <option>
                                F
                            </option>

                        </Input>
                        <button type='submit'>Submit</button>
                    </form>
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
            </Modal>
        </>
    )
}
