
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default function NewPatient(args: any) {

    const [name, setName] = useState<string>('')
    const [age, setAge] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [gender, setGender] = useState(false);


    const patients = useSelector((state))

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    return (
        <>

            <Modal isOpen={modal} toggle={toggle} {...args} >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label for="Name">
                            Name
                        </Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Enter Name"
                            type="text"
                            value={name}
                        // onChange={ }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="PatientEmail">
                            Email
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="Enter Email "
                            type="email"
                            value={email}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="age">
                            Age
                        </Label>
                        <Input
                            id="age"
                            name="age"
                            placeholder="Enter Age"
                            type='text'
                            value={age}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="gender">
                            Gender
                        </Label>
                        <Input
                            id="gender"
                            name="gender"
                            type="select"
                        ></Input>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
            </Modal>
        </>
    )
}