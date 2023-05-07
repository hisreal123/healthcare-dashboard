
import React, { useState } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default function NewPatient(args: any) {


    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <>

            <Modal isOpen={modal} toggle={toggle} {...args} >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                <form action="">
                    in
                </form>
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
            </Modal>
        </>
    )
}
