import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalTitle from 'react-bootstrap/ModalTitle';

const ModalForm = (props) => {
  return (
    <Modal show={true}>
      <ModalHeader>
        <ModalTitle>{props.title}</ModalTitle>
      </ModalHeader>
      <ModalBody>{props.children}</ModalBody>
      <ModalFooter>{props.footer}</ModalFooter>
    </Modal>
  );
};

export default ModalForm;
