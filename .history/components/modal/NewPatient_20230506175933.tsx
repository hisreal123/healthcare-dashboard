
import { useState } from 'react';
import { FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default function NewPatient(args: any) {


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
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="PatientEmail">
                            Email
                        </Label>
                        <input
                            id="email"
                            name="email"
                            placeholder="Enter Email "
                            type="email"
                            value: {email}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">
                            Password
                        </Label>
                        <Input
                            id="examplePassword"
                            name="password"
                            placeholder="password placeholder"
                            type="password"
                        />
                    </FormGroup>
                    {/*    <FormGroup>
                        <Label for="exampleSelect">
                            Select
                        </Label>
                        <Input
                            id="exampleSelect"
                            name="select"
                            type="select"
                        ></Input>
                    </FormGroup> */}
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
            </Modal>
        </>
    )
}
