
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
                        <Label for="exampleEmail">
                            Name
                        </Label>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="with a placeholder"
                            type="email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Email
                        </Label>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="with a placeholder"
                            type="email"
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
