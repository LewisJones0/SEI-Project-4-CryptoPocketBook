import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

export default class Login extends React.Component {

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
    <Modal show={true}>
      <ModalHeader>
        <ModalTitle>Hi</ModalTitle>
      </ModalHeader>
      <ModalBody>asdfasdf</ModalBody>
      <ModalFooter>This is the footer</ModalFooter>
    </Modal>
    )
  }
}